import React from 'react';
import BaseConverter from './BaseConverter';

const massUnits = {
    mg: { name: 'Miligrame', toBase: (x) => x / 1000000 },
    g: { name: 'Grame', toBase: (x) => x / 1000 },
    kg: { name: 'Kilograme', toBase: (x) => x },
    t: { name: 'Tone', toBase: (x) => x * 1000 }
};

const MassConverter = () => <BaseConverter units={massUnits} />;

export default MassConverter;