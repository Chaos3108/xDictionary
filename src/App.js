import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [defintion, setDefinition] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const dictionaryData = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const handleForm = (e) => {
    setIsDisabled(true);
    e.preventDefault();
    const meaning = dictionaryData.filter(
      (item) => item?.word.toLowerCase() === word?.toLowerCase()
    );
    console.log(meaning, word);
    if (meaning.length > 0) {
      setDefinition(meaning[0]?.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          type="text"
          placeholder="Search for a word..."
        ></input>
        <button type="submit"> submit</button>
      </form>
      <h3>Definition:</h3> <p>{defintion}</p>
    </div>
  );
}

export default App;
