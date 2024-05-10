import React from 'react';
import './IMCResult.css';

const getIMCCategory = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && 29.9) return 'Sobrepeso';
    if (imc >= 30 && 34.9) return 'Obesidade Grau 1';
    if (imc >= 35 && 39.9) return 'Obesidade Grau 2';
    if (imc >= 40) return 'Obesidade Grau 3';
};

const IMCResult = ({ imc }) => {
    if (!imc) {
        return <p className="imc-message">Calcule seu IMC para ver o resultado.</p>;
    }

    const category = getIMCCategory(parseFloat(imc));

    return (
        <div className="imc-result">
            <h2>Seu IMC é: {imc}</h2>
            <p>Categoria: {category}</p>
        </div>
    );
};

export default IMCResult;