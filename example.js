console.log('array map method lecture');

const caterpillar = 'Ben';
const caterpillarToButterfly = function(caterpillar){
    return {name: caterpillar, isButterfly: true}
}

const caterpillarArray = [
    'Ben',
    'Hanz',
    'Kristy',
    'Candace'
];

const butterflyArray = caterpillarArray.map(value => {
    const newButterfly =  caterpillarToButterfly(value);
    return newButterfly;
} );

console.log('butterflyArray', butterflyArray)