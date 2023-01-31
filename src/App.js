
import './App.css';
import Counter from "./components/Counter"
import IncereaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";

function App() {
  return (
    <div>
      <Counter />
      <IncereaseCounter />
      <IncreaseByTwoCounter />
      <DecreaseCounter />
      
    </div>
  );
}

export default App;
