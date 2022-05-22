import Product from './Product'
import "../scss/product-list.scss"

export default () => {
  return (
    <div className='products-list'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}