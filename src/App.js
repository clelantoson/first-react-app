import React from "react";
import "./App.css";
import teaImage from "./tea.PNG";
import Card from "./Card";

const App = () => {
  const emojis = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="App-header">
        <p style={{ marginLeft: "20px", backgroundColor: "red" }}>Bonjour </p>
        <img className="tea" src={teaImage} alt="tea" />
        <div className="cards">
          <Card emoji="😍" />
          <Card emoji="😸" />
          <Card emoji="😍" />
          <Card emoji="👀" />
          <Card emoji="😸" />
          <Card emoji="👀" />
        </div>
      </div>
    </>
  );
};

export default App;
