import React from 'react';
import BaseConverter from './BaseConverter';

const lengthUnits = {
    mm: { name: 'Milimetri', toBase: (x) => x / 1000 },
    cm: { name: 'Centimetri', toBase: (x) => x / 100 },
    m: { name: 'Metri', toBase: (x) => x },
    km: { name: 'Kilometri', toBase: (x) => x * 1000 },
    inch: { name: 'Inch', toBase: (x) => x * 0.0254 },
    ft: { name: 'Picioare', toBase: (x) => x * 0.3048 }
};

const LengthConverter = () => <BaseConverter units={lengthUnits} />;

export default LengthConverter;