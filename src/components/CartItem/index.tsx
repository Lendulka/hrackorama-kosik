import IProduct from "../../models/Product";
import Amount from "../Amount";
import CartProduct from "../CartProduct";
import './style.css';

interface ICartItemProps {
  product: IProduct;
  onAmountChange: (amount: number) => void;
}

const CartItem: React.FC<ICartItemProps> = ({ product, onAmountChange }) => {

  // const [count, setCount] = useState<number>(product.amount);

  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount count={product.amount} onChange={onAmountChange} />
    </div>
  )
};

export default CartItem;
