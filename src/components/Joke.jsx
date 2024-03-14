import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Joke({ name, artir, artmir, ses = 0, emoji = "🤣" }) {
  return (
    <>
      <div className=" text-slate-500 m-2 flex justify-between border-solid border-b pb-2 px-2">
        <div className="flex justify-center gap-2">
          <div
            className="my-auto text-xl rounded-lg cursor-pointer"
            onClick={artmir}
          >
            <FaArrowDown />
          </div>
          <div className="border-2 border-green-700 rounded-full shadow-slate-800 size-10 shadow-2xl">
            <p className="p-1 mx-1 text-xl text-center">{ses}</p>
          </div>
          <div
            className="my-auto text-xl rounded-lg cursor-pointer"
            onClick={artir}
          >
            <FaArrowUp />
          </div>
        </div>
        <p className="text-red-800 mx-2 my-auto">{name}</p>
        <div className="my-auto">
          <div className="">{emoji}</div>
        </div>
      </div>
    </>
  );
}

export default Joke;
