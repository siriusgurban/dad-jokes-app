function Joke({ name, artir, artmir, ses = 0 }) {
  return (
    <>
      <div className="p-2 bg-orange-500 m-2 flex justify-center">
        <div className="flex justify-center">
          <button className="size-8 bg-slate-200 rounded-lg" onClick={artmir}>
            -
          </button>
          <p className="p-1 mx-1">{ses}</p>
          <button className="size-8 bg-slate-200  rounded-lg" onClick={artir}>
            +
          </button>
        </div>
        <p className="text-red-800  mx-2">{name}</p>
      </div>
    </>
  );
}

export default Joke;
