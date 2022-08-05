import { useEffect, useState } from "react";

function Content() {
  let [character, setCharacter] = useState();

  useEffect(() => {
    async function getCharacter() {
      let dataCharacter = await fetch(
        "https://rickandmortyapi.com/api/character/1",
        {
          mode: "cors",
        }
      );

      let dataJson = await dataCharacter.json();
      let image = dataJson.image;
      console.log(dataJson);
      setCharacter(image);
    }
    getCharacter();
  }, []);

  return (
    <div>
      <img alt="character" src={character} />
    </div>
  );
}

export default Content;
