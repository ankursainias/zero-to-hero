import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/counterReducer'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter );
  const dispatch = useDispatch();
  console.log(counter)
  return (
    <>
      <div className="counter-input-group">
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-default btn-number"
            onClick={() => dispatch(counterActions.decrement())}
          >
            -
          </button>
        </span>
        {counter}
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-default btn-number"
            onClick={() => dispatch(counterActions.incerement())}
          >
            +
          </button>
        </span>
      </div>
    </>
  );
};

export default Counter;
