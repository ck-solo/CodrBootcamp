import React, { useMemo, useState } from "react";

const Numbers = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const make2x = useMemo(() => {
    for (let i = 10; i > 0; i--) {
      console.log("Calcutating the 2x");
    }
    return number * 2;
  }, [number]);

  return (
    <div className="m-12">
      <div>
        <input
          className="outline"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>Number: {number}</div>
      <div>2xed Value : {make2x}</div>
      <div>count:{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Numbers;