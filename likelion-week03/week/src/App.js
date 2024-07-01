import React from "react";
import "./App.css";
import Food from "./Food";
import puding from "./img/puding.jpg";
import burger from "./img/burger.jpg";
import sushi from "./img/sushi.jpg";
import bingsu from "./img/bingsu.jpg";
import tonkstsu from "./img/tonkstsu.jpg";

function App() {
  const name = "Dongeun";
  const initImage = puding;
  const [foodImage, setFoodImage] = React.useState(initImage);

  const handleChangeFood = () => {
    const images = [puding, burger, sushi, bingsu, tonkstsu];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setFoodImage(randomImage);
  };

  return (
    <div id="main">
      <h1 id="notice">{name}'s favorite foods 😝✨</h1>
      <Food foodImage={foodImage} changeFood={handleChangeFood} />
    </div>
  );
}

export default App;
