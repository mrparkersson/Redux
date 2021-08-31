import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';

const Counter = () => {
 const [showCounter, setShowCounter] = useState(false);

 const dispatch =  useDispatch()
 const counter = useSelector(state=> state.counter)

 const incrementHandler = () => {
dispatch({type: 'increment'})
};

const decrementHandler = () => {
dispatch({
  type: 'decrement'
})
};

const increasetHandler = () => {
  dispatch({
    type: 'increase',
    amount: 5
  })
}

  const toggleCounterHandler = () => {
    setShowCounter(prev => !prev);
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && <div>
         <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>

      </div> }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
