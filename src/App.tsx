import { useState } from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Header from './components/Header';
import products from './data/products';
import IProduct from './models/Product';
import './style.css';

const App: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>(products)

  const handleAmountChange = (index: number, amount: number) => {
    console.log(`index: ${index} amount: ${amount}`)
    const newProducts = [...cartProducts]
    newProducts[index] = { ...newProducts[index], amount: amount }
    // newProducts[index].amount = amount
    console.log(products)
    console.log(newProducts)
    setCartProducts(newProducts)
  }

  const total: number = cartProducts.map((p) => p.amount * p.price).reduce((prev, cur) => prev + cur, 0)

  return (
    <div className="container">
      <Header total={total} />
      <Banner />
      <Cart products={cartProducts} onAmountChange={handleAmountChange} />
    </div>
  );
};

export default App;