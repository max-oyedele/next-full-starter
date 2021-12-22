import React from "react";
import { HStack, Box, Text, Button } from "@chakra-ui/react";
import { RootState } from "src/redux/store";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { decrement, increment } from "src/redux/slices/counterSlice";

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <HStack>
      <Button onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Text>{count}</Text>
      <Button onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </HStack>
  );
}
