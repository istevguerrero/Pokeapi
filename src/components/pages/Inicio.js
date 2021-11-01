import React from "react";
import Carousel from "../carousel/Carousel";

const Inicio = () => {
  return (
    <div>
      <Carousel />
      <h1>Esta es la pagina de Inicio</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/CqLvqJAAqwM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Inicio;
