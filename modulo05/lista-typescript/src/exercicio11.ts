const numRomano: (number | string)[][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

const RomanoConvertido = (num: number): any => {
  if (num === 0) {
    return '';
  }
  
  for (let i = 0; i < numRomano.length; i++) {
    if (num >= numRomano[i][0]) {
      console.log("CONSOLE", numRomano[i][1])
      return numRomano[i][1] + RomanoConvertido(num - Number(numRomano[i][0]));
    }
  }
}

console.log(RomanoConvertido(520))
