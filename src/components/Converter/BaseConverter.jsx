import React, { useState, useEffect } from 'react';
import './Converter.css';

const BaseConverter = ({ units }) => {
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState(Object.keys(units)[0]);
    const [toUnit, setToUnit] = useState(Object.keys(units)[1]);

    const convert = (value, from, to) => {
        if (!value || !from || !to) return '';
        const baseValue = units[from].toBase(parseFloat(value));
        const toBaseUnit = units[to].toBase(1);
        return (baseValue / toBaseUnit).toFixed(4);
    };

    const result = convert(inputValue, fromUnit, toUnit);

    return (
        <div className="converter-container">
            <div className="input-group">
                <label>Valoare:</label>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Introduceți valoarea..."
                />
            </div>

            <div className="select-group">
                <div className="input-group">
                    <label>Din:</label>
                    <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                    >
                        {Object.entries(units).map(([key, unit]) => (
                            <option
                                key={key}
                                value={key}
                                disabled={key === toUnit}
                            >
                                {unit.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label>În:</label>
                    <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                    >
                        {Object.entries(units).map(([key, unit]) => (
                            <option
                                key={key}
                                value={key}
                                disabled={key === fromUnit}
                            >
                                {unit.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="result">
                {result && (
                    <span>
                        {inputValue} {units[fromUnit].name} = {result} {units[toUnit].name}
                    </span>
                )}
            </div>
        </div>
    );
};

export default BaseConverter;