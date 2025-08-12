import { useEffect, useState } from "react";
function UseEffectHook() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Count updated to ${counter + 1}`);
    setTimeout(() => setCounter(counter + 1), 1000);
  });

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <p style={{ fontSize: "40px", paddingLeft: "10px" }}>{counter}</p>
    </div>
  );
}

export default UseEffectHook;
