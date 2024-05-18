import IProduct from "../../models/Product";
import CartItem from "../CartItem";
import './style.css';

interface CartProps {
  products: IProduct[];
  onAmountChange: (index: number, amount: number) => void;
}

const Cart: React.FC<CartProps> = ({ products, onAmountChange }) => {

  // const [cartProducts, setCartProducts] = useState<IProduct[]>(products)

  const result = products.map(p => p.amount).reduce((prev, cur) => prev + cur, 0)
  // const result = cardProducts.reduce((acc, product) => acc + product.amount, 0);

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {result}</span>
      </div>
      <div className="cart__items">
        {products.map((product, index) => (
          <CartItem
            product={product}
            key={product.name}
            onAmountChange={amount => onAmountChange(index, amount)} />
        ))}
      </div>
    </div>
  )
};

export default Cart;
