import './style.css';

interface IAmountProps {
  count: number;
  onChange: (value: number) => void;
}

const Amount: React.FC<IAmountProps> = ({ count, onChange }) => {
  // const [count, setCount] = useState(value);

  const handelIncrement = () => {
    onChange(count + 1);
  }

  const handelDecrement = () => {
    if (count > 0) {
      onChange(count - 1);
    }
  }

  return (
    <div className="amount">
      <button className="amount__btn" onClick={handelDecrement}>–</button>
      <div className="amount__count">{count}</div>
      <button className="amount__btn" onClick={handelIncrement}>+</button>
    </div>
  );
};

export default Amount;
