import { useEffect, useState } from "react";
import Joke from "./Joke";
import { smiles } from "../constant/smile";
import Loader from "../assets/icons/loader.gif";

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

  const handleEmoji = (i) => {
    let emoji;

    if (i < 3) {
      emoji = smiles.smile1;
    }

    if (i < 6 && i >= 3) {
      emoji = smiles.smile3;
    }

    if (i < 8 && i >= 6) {
      emoji = smiles.smile2;
    }

    if (i == 8) {
      emoji = smiles.smile4;
    }

    if (i == 9) {
      emoji = smiles.smile5;
    }
    return emoji;
  };

  return (
    <>
      <div className="overflow-y-auto">
        {data == "" && (
          <div className="text-3xl flex justify-center">
            <img src={Loader} alt="loader" />
          </div>
        )}
        {data?.map((item, index) => {
          const emoji = handleEmoji(index);
          return (
            <div key={index}>
              <Joke
                ses={item?.ses}
                name={item?.name}
                emoji={emoji}
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
