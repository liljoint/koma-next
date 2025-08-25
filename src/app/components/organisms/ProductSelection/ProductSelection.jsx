import { useEffect, useState } from 'react'
import Autocomplete from '@/app/components/molecules/Autocomplete/Autocomplete'
//import Products from '@/resources/Products.json'
import Button from '@/app/components/atomics/Button/Button'
import Input from '@/app/components/atomics/Input/Input'
import Alert from '../../atomics/Alert/Alert'
import { Spinner } from '@/mt'
import { getCurrentOrder, updateProductOrder } from '@/client/orders/orders'
import CurrentOrder from '@/app/components/organisms/CurrentOrder/CurrentOrder'
import useSWR from 'swr'
import PrintDetailButton from '../../molecules/PrintButton/PrintDetailButton'
import { WaiterPassword } from '../WaiterPassword/WaiterPassword'
import commandPrinter from '@/actions/commandPrinter'

const ProductSelection = ({ title, table, productsList }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [products, setProducts] = useState([])
  const [productQuantity, setProductQuantity] = useState(1)
  const [pass, setPass] = useState('')
  const [isValid, setValid] = useState(false)
  const [waiterInfo, setWaiterInfo] = useState(null)
  const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false)

  const {
    data: currentOrder,
    isLoading,
    mutate,
  } = useSWR(
    [`/api/request-order/get-current-request-order?tableid=${table.id}`],
    getCurrentOrder(table)
  )

  const handleOnChange = (data) => {
    setSelectedItem(data)
  }

  const handleAddProduct = () => {
    const productObject = {
      ...selectedItem,
      id: selectedItem.value,
      quantity: productQuantity,
      name: selectedItem.label,
    }
    products.length > 0
      ? setProducts((prev) => {
          const item = prev.findIndex((p) => p.id === productObject.id)
          if (item > -1) {
            prev[item] = productObject
          } else {
            prev.push(productObject)
          }
          return [...prev]
        })
      : setProducts([productObject])
    setSelectedItem(null)
  }
  const handleUpdateOrder = () => {
    setLoadingUpdateProduct(true)
    updateProductOrder(table, products)
      .then((res) => {
        mutate(res)
        setProducts([])
        setLoadingUpdateProduct(false)
        commandPrinter(products, waiterInfo)
      })
      .catch((e) => console.log(e))
  }
  const getTip = (value) => {
    return value * 0.1
  }
  return isValid ? (
    <div className="flex w-full flex-col gap-5">
      <h1>{title}</h1>
      {!isLoading ? <CurrentOrder orders={currentOrder?.orders} /> : null}
      <div>
        <div>Agregar productos:</div>
        <Autocomplete
          options={productsList}
          onChange={handleOnChange}
          value={selectedItem?.label || ''}
          placeholder="Seleccione producto"
        />
        <div>
          <PrintDetailButton
            products={{
              ...currentOrder,
              tip: getTip(currentOrder?.totalAmount),
              detailTotal:
                getTip(currentOrder?.totalAmount) + currentOrder?.totalAmount,
            }}
          />
        </div>
      </div>
      <>
        {selectedItem && (
          <div>
            <h1>Agregar Pedido</h1>
            <div className="flex items-center justify-between gap-3">
              {selectedItem.label}
              <Input
                placeholder="Cantidad"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                type="number"
                min="1"
              />
              <Button onClick={handleAddProduct}>+</Button>
            </div>
          </div>
        )}
        {products.length > 0 && (
          <div className="pt-5">
            <h1>Pedido</h1>
            {products?.map((product, index) => (
              <div key={index}>
                {product.name} {product.quantity}
              </div>
            ))}
            <div className="flex gap-3">
              <Button onClick={handleUpdateOrder} variant="filled">
                Pedir
              </Button>
            </div>
          </div>
        )}
      </>
      <Alert
        color="yellow"
        open={isLoading}
        onClose={() => setIsLoading(false)}
      >
        Cargando productos <Spinner />
      </Alert>
      <Alert
        color="blue"
        open={loadingUpdateProduct}
        onClose={() => setLoadingUpdateProduct(false)}
      >
        Actualizando producto <Spinner />
      </Alert>
    </div>
  ) : (
    <WaiterPassword
      field={pass}
      fieldSetter={setPass}
      setValid={setValid}
      setUserInfo={setWaiterInfo}
    ></WaiterPassword>
  )
}

export default ProductSelection
