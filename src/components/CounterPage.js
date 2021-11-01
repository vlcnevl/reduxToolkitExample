import React from "react";
import { decrement, increment, incrementByAmount } from "../stores/counter";
import { useSelector, useDispatch } from 'react-redux';

export default function CounterPage() {

     const count = useSelector(state => state.counter.value)
     const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          5 increment
        </button>
        
      </div>
    </div>
  );
}
