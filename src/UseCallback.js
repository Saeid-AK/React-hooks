import { useState, useCallback } from "react";

import Title from "./components/Title";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  return (
    <div>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={incrementCount} />
      <Age age={age} />
      <AgeBtn handleAge={incrementAge} />
    </div>
  );
};

export default UseCallback;
