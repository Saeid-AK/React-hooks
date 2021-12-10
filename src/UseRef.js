import { useRef, forwardRef } from "react";

const UseRef = () => {
  const textInput = useRef();

  const triggerHandler = () => {
    console.log(textInput.current.value);
  };
  return (
    <div>
      <h1>Form:</h1>
      <InputComponent ref={textInput} />
      <button onClick={triggerHandler}>Trigger</button>
    </div>
  );
};

const InputComponent = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default UseRef;
