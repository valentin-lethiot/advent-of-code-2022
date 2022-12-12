const LOWERCASE_A_VALUE = 'a'.charCodeAt(0)
const UPPERCASE_A_VALUE = 'A'.charCodeAt(0)
const UPPERCASE_Z_VALUE = 'Z'.charCodeAt(0)

const findWrongPlaceItem = (leftCompartment: string, rightCompartment: string): string => {
  const leftItems: string[] = [];
  const rightItems: string[] = [];

  for (let i = 0; i < leftCompartment.length; i++) {
    const leftItem = leftCompartment[i];
    if (rightItems.includes(leftItem)) return leftItem;
    leftItems.push(leftItem);

    const rightItem = rightCompartment[i];
    if (leftItems.includes(rightItem)) return rightItem;
    rightItems.push(rightItem);
  }
  return ''
}

const getItemValue = (item: string): number => {
  const itemValue = item.charCodeAt(0);

  if (itemValue >= UPPERCASE_A_VALUE && itemValue <= UPPERCASE_Z_VALUE) {
    return 27 + (itemValue - UPPERCASE_A_VALUE)
  }
  return 1 + (itemValue - LOWERCASE_A_VALUE)
}

export class Day3 implements Day {
  inputs: string[]
  name: string

  constructor(name: string, inputs: string[]) {
    this.inputs = inputs;
    this.name = name;
  };

  solvePart1(): string {
    let total = 0;
    
    this.inputs.forEach(rucksacks => {
      const itemsLength = rucksacks.length;
      const leftCompartment = rucksacks.substring(0, itemsLength / 2)
      const rightCompartment = rucksacks.substring(itemsLength / 2)
  
      const wrongPlaceItem = findWrongPlaceItem(leftCompartment, rightCompartment);
      total += getItemValue(wrongPlaceItem);
    })
    return `${total}`;
  }

  solvePart2(): string {
    let total = 0;

    for (let i = 3; i <= this.inputs.length; i += 3) {
      const firstElf = this.inputs[i - 3]
      const secondElf = this.inputs[i - 2]
      const thirdElf = this.inputs[i - 1]
      let comparaisonCharacter = '';
    
      for (let j = 0; j < firstElf.length; j++) {
        comparaisonCharacter = firstElf[j];
        if (secondElf.includes(comparaisonCharacter) && thirdElf.includes(comparaisonCharacter)) {
          break;
        } 
      }
    
      total += getItemValue(comparaisonCharacter);
    }
    
    return `${total}`;
  }
}





