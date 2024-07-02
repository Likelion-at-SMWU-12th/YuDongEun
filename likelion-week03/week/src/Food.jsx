import React from "react";
import "./Food.css";

function Food({ foodImage, changeFood }) {
  const foodName = foodImage.split("/").pop().split(".")[0];

  return (
    <div>
      <img src={foodImage} alt={foodName} style={{ width: "300px" }} />
      <br />
      {foodName === "tonkstsu" ? (
        <>돈가스 NooOOoo...</>
      ) : (
        <> That's my favorite food !</>
      )}
      <br />
      <button onClick={changeFood}>⭐</button>
    </div>
  );
}

export default Food;
