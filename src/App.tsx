import { Counter } from "./components/Counter";
import "./App.css";

// store: One global state made up of small slices

// Actions; Used to define actions on the state.
// payload: It sends data to redux
// type: what action to perform

// Reducers: Taking an action and make update in the store. Can never directly make changes. First make copy of the state, make changes in it and then replace original with copy

function App() {
  return (
    <div>
      <h2>Redux Learning Project</h2>
      <Counter />
    </div>
  );
}

export default App;
