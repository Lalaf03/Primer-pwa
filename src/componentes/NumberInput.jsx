import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";

const NumberInput = () => {
  //Creamos 2 variables inicializándolas con estados
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });
  const {
    handleChange,
    suma,
    resta,
    multiplicacion,
    division,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);
  return (
    <>
      <label htmlFor="">
        Numero 1:
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label htmlFor="">
        Numero 2:
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>

      <Resultado operacion="Suma" calculo={suma()} />
      <Resultado operacion="Resta" calculo={resta()} />
      <Resultado operacion="Multiplicaicon" calculo={division()} />
      <Resultado operacion="Division" calculo={multiplicacion()} />
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
