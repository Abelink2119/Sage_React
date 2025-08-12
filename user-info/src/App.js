import "./App.css";
import CounterSlice from "./redux/CounterSlice";
import Button from "./Components/Button";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Awash Counter App </h1>
      <h1>{count}</h1>
      <CounterSlice />
      <Button />
    </div>
  );
}

export default App;
