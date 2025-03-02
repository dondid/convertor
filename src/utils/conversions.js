export const units = {
    // Lungime
    mm: { name: 'Milimetri', type: 'length', toBase: (x) => x / 1000 },
    cm: { name: 'Centimetri', type: 'length', toBase: (x) => x / 100 },
    m: { name: 'Metri', type: 'length', toBase: (x) => x },
    km: { name: 'Kilometri', type: 'length', toBase: (x) => x * 1000 },
    inch: { name: 'Inch', type: 'length', toBase: (x) => x * 0.0254 },
    ft: { name: 'Picioare', type: 'length', toBase: (x) => x * 0.3048 },

    // Masă
    mg: { name: 'Miligrame', type: 'mass', toBase: (x) => x / 1000000 },
    g: { name: 'Grame', type: 'mass', toBase: (x) => x / 1000 },
    kg: { name: 'Kilograme', type: 'mass', toBase: (x) => x },
    t: { name: 'Tone', type: 'mass', toBase: (x) => x * 1000 },

    // Volum
    ml: { name: 'Mililitri', type: 'volume', toBase: (x) => x / 1000 },
    l: { name: 'Litri', type: 'volume', toBase: (x) => x },
    m3: { name: 'Metri cubi', type: 'volume', toBase: (x) => x * 1000 },
};

export const convert = (value, from, to) => {
    if (!value || !from || !to) return '';
    if (units[from].type !== units[to].type) return 'Unități incompatibile';

    const baseValue = units[from].toBase(parseFloat(value));
    const toBaseUnit = units[to].toBase(1);
    return (baseValue / toBaseUnit).toFixed(4);
};

