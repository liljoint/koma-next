import { useState } from 'react'
import Autocomplete from '@/app/components/molecules/Autocomplete/Autocomplete'
import Products from '@/resources/Products.json'
import Button from '@/app/components/atomics/Button/Button'
import PrintButton from '@/app/components/molecules/PrintButton/PrintButton'
import Input from '../../atomics/Input/Input'

const ProductSelection = ({ title }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [products, setProducts] = useState([])
  const [productQuantity, setProductQuantity] = useState(1)

  const productList = Products.map((product) => ({
    value: product.id,
    label: product.productName,
  }))
  const handleOnChange = (data) => {
    setSelectedItem(data)
  }

  const handleAddProduct = () => {
    const productObject = {
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
  return (
    <>
      <h1>{title}</h1>
      <Autocomplete
        options={productList}
        onChange={handleOnChange}
        value={selectedItem?.label || ''}
        placeholder="Seleccione producto"
      />
      <>
        {selectedItem && (
          <div className="p-5">
            <h1>Agregar Pedido</h1>
            <div className="flex items-center justify-between gap-5">
              {selectedItem.label}
              <Input
                placeholder="Cantidad"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                type="number"
              />
              <Button onClick={handleAddProduct}>Agregar</Button>
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
            <PrintButton content={products} />
          </div>
        )}
      </>
    </>
  )
}
export default ProductSelection
