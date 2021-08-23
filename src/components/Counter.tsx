import React from "react";
import { RootState } from "src/redux/store";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { decrement, increment } from "src/redux/slices/counterSlice";

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

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
      </div>
    </div>
  );
}
