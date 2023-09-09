import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"


function App() {
   
  const [count,setCount] = useState<number>(1);

  return (
    <>
    <Heading title={"Hey"} />
    <Section title="another title">section element children</Section>
    <Counter setCount={setCount}  >Count is {count}</Counter>
    </>
  )
}

export default App
