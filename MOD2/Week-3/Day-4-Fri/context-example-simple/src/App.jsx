import { useState, createContext } from "react";
import "./App.css";
import Parent from "./components/Parent";

export const FamilyContext = createContext();

function App() {
  const [traits, setTraits] = useState({
    color: "white",
    backgroundColor: "blue",
  });

  function changeTraits() {
    let newTraits = {
      color: traits.color === "white" ? "black" : "white",
      backgroundColor: traits.backgroundColor === "blue" ? "red" : "blue",
    };
    setTraits(newTraits);
  }

  return (
    <FamilyContext.Provider
      value={{
        traits: traits,
        setTraits: setTraits,
        changeTraits: changeTraits,
      }}
    >
      <div>
        <button onClick={changeTraits}>Change</button>
        <br />
        <br />
        <span style={traits}>GrandParent (App)</span>
        <br />

        <Parent />
      </div>
    </FamilyContext.Provider>
  );
}

export default App;
