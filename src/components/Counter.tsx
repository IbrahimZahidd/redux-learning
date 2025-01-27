import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmountMethod1,
  incrementByAmountMethod2,
  incrementAsync,
} from "../state/counter/counterSlice";

// Connect this counter component to redux to access the state and also we're going to connect it so that it's able to dispatch some actions
export const Counter = () => {
  // useSelector hook is used to get the state from the redux store.
  const count = useSelector((state: RootState) => state.counter.value);

  // To dispatch actions as react cannot talk to redux directly. Therefore, we use hooks. Without Async Functions
  // const dispatch = useDispatch();

  // With Async Functions
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmountMethod1(10))}>
          INCREMENT-BY-AMOUNT_M1
        </button>
        <button
          onClick={() => dispatch(incrementByAmountMethod2({ value: 10 }))}
        >
          INCREMENT-BY-AMOUNT_M2
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          INCREMENT-ASYNC
        </button>
      </div>
    </div>
  );
};
