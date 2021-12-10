import { useState, useCallback } from "react";

import Title from "./components/UseCallback/Title";
import Count from "./components/UseCallback/Count";
import CountBtn from "./components/UseCallback/CountBtn";
import Age from "./components/UseCallback/Age";
import AgeBtn from "./components/UseCallback/AgeBtn";

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
