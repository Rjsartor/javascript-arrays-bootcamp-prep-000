var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]; 
  
  // .unshift => beginning of Array
  // .push => end of array
  
  function addElementToBeginningOfArray(array, element) {
    array = [element, ...array]
    return array
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
  }
  
    function addElementToEndOfArray(array, element) {
    newArray = array.push(element)
    return newArray
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
  }
  