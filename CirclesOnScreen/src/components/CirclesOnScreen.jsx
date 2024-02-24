import "./CirclesOnScreen.css";
import React, { useState, useEffect } from "react";

const CirclesOnScreen = () => {
  const [pontos, setPontos] = useState([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleLimpar = () => {
    setPontos([""]);
  };

  const addDots = (e) => {
    const newDots = {
      clientX: e.clientX,
      clientY: e.clientY,
    };

    setPontos((prev) => [...prev, newDots]);
  };

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <>
      <div id="topGame">
      <p>Posição do mouse:
        <b>
            {coords.x},{coords.y}
          </b>
        </p>
        <button onClick={handleLimpar}>LIMPA</button>

        
      </div>

      <div id="pageGame" onClick={addDots}>
        {pontos.map((ponto, index) => {
          return (
            <div
              key={index}
              style={{
                left: ponto.clientX-10,
                top: ponto.clientY-108,
                position: "absolute",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "blue",
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default CirclesOnScreen;
