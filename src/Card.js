import React, { useState } from "react";
import "./App.css";

const Card = ({ emoji }) => {
  const [visible, setVisible] = useState(false);
  const handleTurn = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };
  return (
    <div className="card" onClick={() => handleTurn()}>
      {visible ? <p style={{ fontSize: "100px" }}>{emoji}</p> : null}
    </div>
  );
};

export default Card;
