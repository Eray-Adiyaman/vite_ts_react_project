import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";
import { CounterReducer } from "./components/CounterReducer";

interface User {
  id: number;
  username: string;
}

type FibboFunc = (n: number) => number;

const fib: FibboFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const fibnum: number = 23;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("mounting");
    console.log("Users:", users);
    

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      e.preventDefault(),
      setCount((prev) => prev + 2);
    },
    []
  );

  const fiboResult = useMemo(() => fib(fibnum), [fibnum]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={addTwo}>+2</button>
      <h1>{fiboResult}</h1>
      <input ref={inputRef} type="text" />

      <CounterReducer>{(num: number)=><>Current count {num} </>}</CounterReducer>
    </>
  );
}

export default App;
