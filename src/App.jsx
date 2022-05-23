import { useEffect, useState } from "react";
import Header from "./components/Header";
import { IoIosCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Drawer from "./components/Drawer";
import Product from "./components/Product";
import "./scss/product-list.scss";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export default () => {
  const [cartFruits, setCartFruits] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [fruits, setFruits] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

    useEffect(() => {
      axios.get("https://628aa9047886bbbb37aa7322.mockapi.io/items").then(res => setFruits(res.data));
      axios.get("https://628aa9047886bbbb37aa7322.mockapi.io/cart").then(res => setCartFruits(res.data))
    }, []);

  const onAddToCart = (obj) => {
    axios.post(`https://628aa9047886bbbb37aa7322.mockapi.io/cart/${id}`);
  }

  const onRemoveToCart = (code) => {
    console.log(code);
    setCartFruits((prev) => prev.filter(fruit => fruit.code !== code))
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer fruits={cartFruits} onClose={() => setCartOpened(false)} onRemove={onRemoveToCart} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="search">
        <FaSearch />
        <input onChange={onChangeSearchInput} type="search" value={searchValue} />
        { searchValue && <IoIosCloseCircle onClick={() => setSearchValue('')} /> }
      </div>
      <main>
        <h1>{ searchValue ? `Поиск по запросу: `+searchValue : "Все фрукты" }</h1>
        <div className='products-list'>
        {
          fruits.filter(item => item.name.toLowerCase().includes(searchValue)).map((item) => (
            <Product
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.code}
              code={item.code}
              addToFavourite={() => console.log("Добавили в закладки")}
              addToCart={(obj) => onAddToCart(obj)}
            />
          ))
        }
        </div>
      </main>
    </div>
  )
};
