import React, { useState, useEffect } from 'react';
import { units, convert } from '../../utils/conversions';
import './Converter.css';

const Converter = () => {
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState('cm');
    const [toUnit, setToUnit] = useState('m');
    const [result, setResult] = useState('');

    useEffect(() => {
        const newResult = convert(inputValue, fromUnit, toUnit);
        setResult(newResult);
    }, [inputValue, fromUnit, toUnit]);

    const groupedUnits = Object.entries(units).reduce((acc, [key, value]) => {
        if (!acc[value.type]) {
            acc[value.type] = [];
        }
        acc[value.type].push({ key, ...value });
        return acc;
    }, {});

    const getTypeLabel = (type) => {
        switch(type) {
            case 'length': return 'Lungime';
            case 'mass': return 'Masă';
            case 'volume': return 'Volum';
            default: return type;
        }
    };

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
                        {Object.entries(groupedUnits).map(([type, typeUnits]) => (
                            <optgroup key={type} label={getTypeLabel(type)}>
                                {typeUnits.map(unit => (
                                    <option key={unit.key} value={unit.key}>
                                        {unit.name}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label>În:</label>
                    <select
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                    >
                        {Object.entries(groupedUnits).map(([type, typeUnits]) => (
                            <optgroup key={type} label={getTypeLabel(type)}>
                                {typeUnits.map(unit => (
                                    <option key={unit.key} value={unit.key}>
                                        {unit.name}
                                    </option>
                                ))}
                            </optgroup>
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

export default Converter;