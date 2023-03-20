import React, { useState } from "react";

const Estados = () => {
  // const [estado, cambiarEstado] = useState(valorInicial)

  const [valor, cambiarValor] = useState("Nico");

  const incrementar = () => {
    cambiarValor(valor + 1);
  };

  return (
    <div>
      <h1>Valor: {valor}</h1>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Estados;

/* 
const useState = (valorInicial) => {
  let valor = valorInicial;

  const cambiarValor = (nuevoValor) => {};

  return [valor, cambiarValor];
};
 */
