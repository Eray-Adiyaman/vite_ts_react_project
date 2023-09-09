import { useState } from "react"

export default function Counter() {

    const [count,setCount] = useState<number>(0);

  return (
    <>
    <h1>Count is {count}</h1>
    <button onClick={()=> setCount(prev => prev + 1)}>+</button>
    <button onClick={()=> setCount(prev => prev - 1)}>-</button>
    </>
  )
}
