function farenHeitToCelsius(farenheit) {
  return (farenheit - 32) * 5 / 9;
}
//Arrow function
const farenHeitToCelsius = farenheit => (farenheit - 32) * 5 / 9;

function findMinAndMax(array){
    return [Math.min(...array), Math.max(...array)];
}

//Arrow function
const findMinAndMax = array => [Math.min(...array), Math.max(...array)];//use spead operator

//IIFE leanth and width, and ouutput the area of the rectangle
(function (length, width) {
  console.log(length * width);
})(5, 6);