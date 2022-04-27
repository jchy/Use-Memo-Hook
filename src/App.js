import "./styles.css";
import UseMemo from "./UseMemo";
import WithoutUseMemo from "./WithouthUseMemo";

export default function App() {
  return (
    <div className="App">
      <h1>useMemo Hook</h1>
      <h2>Without useMemo Hook</h2>
      <WithoutUseMemo />
      <h2>With useMemoHook</h2>
      <UseMemo />
    </div>
  );
}
