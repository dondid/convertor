import React from 'react';
import BaseConverter from './BaseConverter';

const volumeUnits = {
    ml: { name: 'Mililitri', toBase: (x) => x / 1000 },
    l: { name: 'Litri', toBase: (x) => x },
    m3: { name: 'Metri cubi', toBase: (x) => x * 1000 }
};

const VolumeConverter = () => <BaseConverter units={volumeUnits} />;

export default VolumeConverter;