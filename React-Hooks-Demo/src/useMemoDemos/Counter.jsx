import React, { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <h4>Counter One - {counterOne}</h4>
      <button onClick={incrementOne}>Increment Count</button>
      <p>{isEven ? "Even" : "Odd"}</p>
      <h4>Counter Two - {counterTwo}</h4>
      <button onClick={incrementTwo}>Increment Count</button>
    </>
  );
}

export default Counter;
