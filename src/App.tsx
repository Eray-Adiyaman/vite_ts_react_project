import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title={"Hey"} />
      <Section title="another title">section element children</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["coffee", "milk", "dust", "water"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
