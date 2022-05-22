import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1>Все товары</h1>
        <ProductList />
      </main>
    </div>
  )
}
