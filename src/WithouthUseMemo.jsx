import { useState } from "react";

const expensiveCalculation = (val) => {
  let nums = val;
  for (let i = 0; i < 100000000; i++) {
    nums += i;
  }
  return nums;
};

const WithoutUseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = expensiveCalculation(count);
  const handleClick = () => {
    setTodos([...todos, "new Todos"]);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <h3>Todos</h3>
        <div>
          {todos.map((elem, i) => {
            return <div key={i}>{elem}</div>;
          })}
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Create Div</button>
      </div>
      <div>Count : {count}</div>
      <button onClick={handleIncrement}> + Increment Count</button>
      <div>
        <p>Expensive Calculation</p>
        {calculation}
      </div>
    </>
  );
};

export default WithoutUseMemo;
