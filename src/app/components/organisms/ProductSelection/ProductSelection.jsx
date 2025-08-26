import { useState } from 'react'
import Autocomplete from '@/app/components/molecules/Autocomplete/Autocomplete'
//import Products from '@/resources/Products.json'
import Button from '@/app/components/atomics/Button/Button'
import Alert from '../../atomics/Alert/Alert'
import { Spinner } from '@/mt'
import { getCurrentOrder, updateProductOrder } from '@/client/orders/orders'
import CurrentOrder from '@/app/components/organisms/CurrentOrder/CurrentOrder'
import useSWR from 'swr'
import commandPrinter from '@/actions/commandPrinter'
import NewProducts from '@/app/components/molecules/NewProducts/NewProducts'
import PrintDetailButton from '@/app/components/molecules/PrintButton/PrintDetailButton'

const ProductSelection = ({ title, table, productsList, waiterInfo }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [products, setProducts] = useState([])
  const [productQuantity, setProductQuantity] = useState(1)
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
    setProductQuantity(1)
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
  return (
    <div className="flex w-full flex-col gap-5">
      <h1>{title}</h1>

      {currentOrder?.orders && currentOrder?.orders?.length > 0 ? (
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
      ) : null}

      {!isLoading ? <CurrentOrder orders={currentOrder?.orders} /> : null}
      <div>
        <div>Agregar productos:</div>
        <Autocomplete
          options={productsList}
          onChange={handleOnChange}
          value={selectedItem?.label || ''}
          placeholder="Seleccione producto"
        />
      </div>
      <>
        {selectedItem && (
          <div>
            <h1>Agregar Pedido</h1>
            <div className="flex items-center justify-between gap-3">
              {selectedItem.label}

              <NewProducts
                value={productQuantity}
                setValue={setProductQuantity}
              />
              <Button onClick={handleAddProduct}>Agregar Pedido</Button>
            </div>
          </div>
        )}
        {products.length > 0 && (
          <div className="pt-5">
            <h1>Agregar Pedido</h1>
            {products?.map((product, index) => (
              <div className="flex w-1/3 justify-between" key={index}>
                <span>{product.name}</span> <span>{product.quantity}</span>
              </div>
            ))}
            <div className="flex gap-3">
              <Button onClick={handleUpdateOrder} variant="filled">
                Confirmar
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
  )
}

export default ProductSelection
