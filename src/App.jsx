import "./App.css";
import JokeList from "./components/JokeList";
import anime from "./assets/icons/Animation - 1710391671681.gif";

function App() {
  return (
    <div className="">
      <div className="flex align-middle mx-auto my-auto max-w-6xl h-lvh">
        <div className="w-1/4 bg-indigo-600 h-3/4 my-auto shadow-2xl rounded-md flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-5xl text-white mx-auto text-center">
              <span className="font-bold">Dad</span>{" "}
              <span className="italic">Jokes</span>
            </h2>
          </div>
          <div className="bg-bg-indigo-600 shadow-xl rounded-full w-1/2 mx-auto">
            <img src={anime} alt="anime" />
          </div>
          <div className="text-center rounded-xl py-2 bg-gradient-to-r from-sky-500 via-purple-300 to-pink-500 w-2/3 mx-auto">
            <h3 className="text-2xl text-white">New Jokes</h3>
          </div>
        </div>
        <div className="w-3/4 bg-slate-100 h-1/2 my-auto">
          <JokeList />
        </div>
      </div>
    </div>
  );
}

export default App;
