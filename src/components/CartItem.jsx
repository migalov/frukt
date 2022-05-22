import { IoIosCloseCircle } from 'react-icons/io'

export default (props) => {
  return(
    <li className="cart-item">
      <img width={150} srcSet={ props.image } />
      <div className="cart-item__info">
        <h3>{ props.name }</h3>
        <p>{ props.price }$</p>
      </div>
      <IoIosCloseCircle />
    </li>
  )
}