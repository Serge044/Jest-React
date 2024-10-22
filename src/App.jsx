import { useState } from "react";
import Counter from "./Counter";

function App() {
  return (
    <>
      <h1>Hello, Serge!</h1>
      <Counter initialCount={0} />
    </>
  );
}

export default App;
