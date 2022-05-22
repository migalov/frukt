import logo from '../img/logo.png';

export default () => {
  return (
    <header className='container flex justify-between items-center'>
      <a href='#'>
        <img srcSet={logo} />
      </a>
      <div className='header-right'>
        <a href='#'>
          Корзина
        </a>
        <a href='#'>
          1200 рублей
        </a>
      </div>
    </header>
  )
}