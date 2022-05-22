import { useEffect, useState } from "react";
import Header from "./components/Header";
import { IoIosCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Drawer from "./components/Drawer";
import Product from "./components/Product";
import "./scss/product-list.scss"

export default () => {
  const [cartFruits, setCartFruits] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [fruits, setFruits] = useState([]);
    useEffect(() => {
    fetch("https://628aa9047886bbbb37aa7322.mockapi.io/fruits")
    .then(res => res.json())
    .then(json => setFruits(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartFruits(prev => [...prev, obj]);
    console.log(obj);
  }


  return (
    <div className="wrapper">
      {cartOpened && <Drawer fruits={cartFruits} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <main>
        <h1>Все товары</h1>
        <div className='products-list'>
        {
          fruits.map((item, key) => (
            <Product
              name={item.name}
              price={item.price}
              image={item.image}
              key={key}
              addToFavourite={() => console.log("Добавили в закладки")}
              addToCart={(obj) => onAddToCart(obj)
        }
            />
          ))
        }
        </div>
      </main>
    </div>
  )
};
