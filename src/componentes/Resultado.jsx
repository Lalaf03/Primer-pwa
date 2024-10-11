import React from "react";
import PropTypes from "prop-types";

//Recibe la operación y el resultado de ese cálculo
const Resultado = ({ operacion, calculo }) => {
  return (
    <>
      <br />
      <span>
        {operacion}= {calculo}
      </span>
    </>
  );
};

Resultado.propTypes = {
  operacion: PropTypes.string,
  calculo: PropTypes.number,
};

export default Resultado;
