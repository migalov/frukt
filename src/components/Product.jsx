import "../scss/product-cart.scss";
import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';


export default () => {
  return (
    <div className="product-cart">
      <div className="product-cart__image">
        <a href="#">
          <img src="/src/img/products/product-img-1.jpg" />
        </a>
      </div>
      <h3 className="product-cart__name">Strawberry</h3>
      <span className="product-cart__cur-for-kg">Per Kg</span>
      <span className="product-cart__price">85$</span>
      <div href="#" className="cart-btns">
        <div>
          <FaShoppingCart />
        </div>
        <div>
          <MdFavorite />
        </div>
      </div>
    </div>
  )
}