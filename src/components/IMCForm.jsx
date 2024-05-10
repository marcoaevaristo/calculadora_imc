import React, { useState } from 'react';
import './IMCForm.css'; 

const IMCForm = ({ onCalculate }) => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleCalculate = (e) => {
        e.preventDefault();
        const imc = (parseFloat(weight) / Math.pow(parseFloat(height), 2)).toFixed(2);
        onCalculate(imc);
    };

    return (
        <form className="imc-form" onSubmit={handleCalculate}>
            <div className="form-group">
                <label htmlFor="weight">Peso (kg):</label>
                <input
                    type="number"
                    id="weight"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="height">Altura (m):</label>
                <input
                    type="number"
                    id="height"
                    step="0.01"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                    className="form-input"
                />
            </div>
            <button type="submit" className="submit-button">Calcular IMC</button>
        </form>
    );
};

export default IMCForm;

