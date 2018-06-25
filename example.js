console.log('array map method lecture');

const caterpillar = 'Ben';
const caterpillarToButterfly = caterpillar => ({name: caterpillar, isButterfly: true});

const caterpillarArray = [
    'Ben',
    'Hanz',
    'Kristy',
    'Candace'
];

const butterflyArray = caterpillarArray.map(value => caterpillarToButterfly(value));

console.log('butterflyArray', butterflyArray)