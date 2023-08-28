import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
const Counter = () => {
  const counter=useSelector(state=>state.counter.counter)
  const show=useSelector(state=>state.counter.showCounter);
  const dispatch=useDispatch();
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement(1))
  }
  const increment5Handler=()=>{
    dispatch(counterActions.incrementBy5(5))
  }
  const decrement5Handler=()=>{
    dispatch(counterActions.decrement(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increment5Handler}>Increment by 5</button>
        <button onClick={decrement5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
