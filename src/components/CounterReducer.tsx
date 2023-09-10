import { ReactNode } from "react";
import { useCounter, useCounterText } from "../context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export const CounterReducer = ({ children }: ChildrenType) => {
  //   const [counter, setCounter] = useState<number>(1);
    const { count,increment,decrement} = useCounter()
    const {text,handleTextInput} = useCounterText();
  

  return (
    <>
      <h1>Reducer Counter</h1>
      <h2>{children(count)}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput}></input>
      <h3>{text}</h3>
    </>
  );
};
