import React, { useState } from 'react';
import IMCForm from './IMCForm';
import IMCResult from './IMCResult';
import './IMCApp.css';

const IMCApp = () => {
  const [imc, setIMC] = useState(null);

  const handleCalculateIMC = (calculatedIMC) => {
    setIMC(calculatedIMC);
  };

  return (
    <div className="imc-app">
      <h1 className="imc-title">Calculadora de IMC</h1>
      <IMCForm onCalculate={handleCalculateIMC} />
      <IMCResult imc={imc} />
    </div>
  );
};

export default IMCApp;

