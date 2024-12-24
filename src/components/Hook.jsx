import { useState } from "react";

export default function Hook() {
  const [number, setNumber] = useState(10);
  function buttonClicked() {
    setNumber(number + 1);
  }

  return (
    <div>
      <p>page {a}</p>
      <button onClick={buttonClicked}>increase</button>
    </div>
  );
}
