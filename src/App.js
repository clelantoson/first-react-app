import React from "react";
import "./App.css";
import teaImage from "./tea.PNG";
import Card from "./Card";

const App = () => {
  const emojis = ["😍", "😍", "😸", "👀", "😸", "👀"];

  return (
    <>
      <div className="App-header">
        <p style={{ marginLeft: "20px", backgroundColor: "red" }}>Bonjour </p>
        <img className="tea" src={teaImage} alt="tea" />
        <div className="cards">
          {emojis.map((emoji) => (
            <Card emoji={emoji} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
