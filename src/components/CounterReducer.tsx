import { ChangeEvent, ReactNode, useReducer } from "react";

const initialState = { count: 0,text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?:string,
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
        return {...state, text: action.payload ?? ""}
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export const CounterReducer = ({ children }: ChildrenType) => {
  //   const [counter, setCounter] = useState<number>(1);

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput =(e:ChangeEvent<HTMLInputElement>)=>{
    dispatch({type:REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value})
  }

  return (
    <>
      <h1>Reducer Counter</h1>
      <h2>{children(state.count)}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input type="text" onChange={handleTextInput}></input>
      <h3>{state.text}</h3>
    </>
  );
};
