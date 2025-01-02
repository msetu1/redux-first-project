import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount) => {
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h2 className="text-3xl font-bold mb-5">Counter with redux !</h2>
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleIncrement(1)}
            className="text-xl btn bg-green-500 text-white hover:bg-black"
          >
            Increment
          </button>
          <div className="text-4xl font-bold">{count}</div>
          <button
            onClick={handleDecrement}
            className="text-xl btn bg-red-500 text-white hover:bg-black"
          >
            Decrement
          </button>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => handleIncrement(5)}
            className="text-xl btn bg-rose-500 text-white hover:bg-black"
          >
            Increment by 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
