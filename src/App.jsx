import "./App.css";
import JokeList from "./components/JokeList";

function App() {
  return (
    <>
      <dir className="bg-black h-lvh">
        <h1 className="text-red-500">Where are jokes?</h1>
        <JokeList />
      </dir>
    </>
  );
}

export default App;
