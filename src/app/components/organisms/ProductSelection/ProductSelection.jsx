import { useEffect, useState } from 'react'
import Autocomplete from '@/app/components/molecules/Autocomplete/Autocomplete'
//import Products from '@/resources/Products.json'
import Button from '@/app/components/atomics/Button/Button'
import PrintButton from '@/app/components/molecules/PrintButton/PrintButton'
import Input from '@/app/components/atomics/Input/Input'
import Alert from '../../atomics/Alert/Alert'
import { Spinner } from '@/mt'
import { voucherTemplate } from '@/actions/voucherTemplate'
import { getActiveProducts } from '@/client/products/products'
import { getCurrentOrder } from '@/client/orders/orders'

const ProductSelection = ({ title, table, parentAction = () => {} }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [products, setProducts] = useState([])
  const [productQuantity, setProductQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [currentOrder, setCurrentOrder] = useState({})

  const [productsList, setProductsList] = useState([])
  useEffect(() => {
    setIsLoading(true)
    getActiveProducts()
      .then((result) => {
        setIsLoading(false)
        setProductsList(
          result?.map((product) => ({
            value: product.id,
            label: product.name,
            ...product,
          }))
        )
      })
      .catch((e) => {
        setIsLoading(false)
      })
    getCurrentOrder(table)
      .then((currentOrder) => {
        setCurrentOrder(currentOrder)
      })
      .catch((e) => {})
  }, [table])
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
    parentAction(products)
  }
  return (
    <>
      <h1>{title}</h1>
      {JSON.stringify(currentOrder?.orders)}
      <Autocomplete
        options={productsList}
        onChange={handleOnChange}
        value={selectedItem?.label || ''}
        placeholder="Seleccione producto"
      />
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
            <PrintButton content={voucherTemplate(products)} />
            <Button onClick={handleUpdateOrder} variant="filled">
              Pedir
            </Button>
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
    </>
  )
}

export default ProductSelection
