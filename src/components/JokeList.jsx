import { useEffect, useState } from "react";
import Joke from "./Joke";

function JokeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function dataFetch() {
      try {
        const res = await fetch("https://jokes-api-azure.vercel.app/jokes");
        const data = await res.json();
        const newData = data.map((item) => ({ ...item, ses: 0 }));

        setData(newData);
        console.log(newData, "newData");
      } catch (error) {
        console.log(error);
      }
    }

    dataFetch();
  }, []);

  function artir(i) {
    const newData = [...data];

    newData[i] = {
      ...newData[i],
      ses: newData[i].ses + 1,
    };

    newData.sort((a, b) => b.ses - a.ses);
    setData(newData);
  }
  function artmir(i) {
    const newData = [...data];

    newData[i] = {
      ...newData[i],
      ses: newData[i].ses - 1,
    };

    newData.sort((a, b) => b.ses - a.ses);
    setData(newData);
  }

  return (
    <>
      <div className="overflow-y-auto">
        {data == "" && <p className="text-3xl">Loading...</p>}
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <Joke
                ses={item?.ses}
                name={item?.name}
                artir={() => artir(index)}
                artmir={() => artmir(index)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default JokeList;
