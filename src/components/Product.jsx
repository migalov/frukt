import { useState, useEffect } from "react";
import "../scss/product-cart.scss";
import { FaShoppingCart } from 'react-icons/fa';
import { MdFavorite } from "react-icons/md";


export default ({ name, image, price, addToFavourite, addToCart }) => {

  const [isAdded, setIsAdded] = useState(false);

  const onClickAddCart = () => {
    addToCart({ name, image, price });
    setIsAdded(!isAdded);
  }

  // useEffect(() => {
  //   console.log('Тумблер изменился');
  // }, [isAdded]);

  return (
    <div className="product-cart">
      <div className="product-cart__image">
        <a href="#">
          <img src={image} />
        </a>
      </div>
      <h3 className="product-cart__name">{name}</h3>
      <span className="product-cart__cur-for-kg">Per Kg</span>
      <span className="product-cart__price">{price}$</span>
      <div href="#" className="cart-btns">
        <div onClick={onClickAddCart} className={isAdded ? 'border-4 border-[#ff0000]': '' }>
          <FaShoppingCart />
        </div>
        <div onClick={addToFavourite}>
          <MdFavorite />
        </div>
      </div>
    </div>
  )
}