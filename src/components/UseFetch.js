import React, { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [resultado, setResultado] = useState({ cargando: true, data: null });

  useEffect(() => {
    getDatos(url);
  }, [url]);

  async function getDatos(url) {
    try {
      setResultado({ cargando: true, data: null });

      const response = await fetch(url);

      const data = await response.json();

      setResultado({ cargando: false, data });
    } catch (error) {
      console.log(error);
    }
  }

  return resultado;
};
