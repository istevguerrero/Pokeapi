import React, { useState } from "react";
import { UseFetch } from "../UseFetch";
import { Cards } from "../cards/Cards";

const Pokemon = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const estado = UseFetch(url);

  const { cargando, data } = estado;

  cargando ? console.log("Cargando: ") : console.log(data.results);

  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <Cards results={data.results} />

          <div className="container m-auto">
            <button
              onClick={() => setUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              Anterior
            </button>

            <button onClick={() => setUrl(data.next)} className="btn btn-dark">
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
