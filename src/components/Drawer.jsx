import { FaShoppingCart } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import CartItem from './CartItem';

export default ({onClose, fruits = [] }) => {
  return(
    <div className="overlay">
      <div className="drawer">
        <IoIosCloseCircle onClick={onClose} />
        <h2>Корзина</h2>
        <ul className="cart-overlay-list">
          {
            fruits.map((obj, key) =>
              <CartItem
                key={key}
                name={obj.name}
                image={obj.image}
                price={obj.price} />
            )
          }
        </ul> 
        <div className="cart-overlay-bottom">
          <p>Итого: 100500$</p>
          <p>Налог 5%: 000$</p>
          <div href="#" className="cart-btns cart-overlay-bottom__btn">
            <div>
              <FaShoppingCart />
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}