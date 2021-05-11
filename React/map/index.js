class ArrayUtilities {
    static addZeros = (props) => props.map((props) => Number(`${props}0`));
    static moreThanFifty = (props) => props.filter((props) => props > 50);
    static removeFirst = ([props, ...rest]) => rest;
    static sumAll = (props) =>
      props.reduce((array1, array2) => array1 + array2, 0);
    static divide = (props) => String(props).split("");
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const addZeros = ArrayUtilities.addZeros(numbers);
  console.log(addZeros);
  
  const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
  console.log(moreThanFifty);
  
  const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
  console.log(noFirst);
  
  const sumAll = ArrayUtilities.sumAll(noFirst);
  console.log(sumAll);
  
  const divided = ArrayUtilities.divide(sumAll);
  console.log(divided);
  