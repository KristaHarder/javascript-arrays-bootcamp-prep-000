var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var myArray = ${[array]}
  myArray = [$'{element}',...myArray]
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = ${[array]}
  return myArray.unshift('${element}')
}

function addElementToEndofArray (array, element) {
  var myArray = [1]
  return myArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  var myArray = [1]
  return myArray.push('${element}')
}

function accessElementInArray (array, index) {
  var myArray = [1,2,3]
  return myArray[0]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  const array = '$(array)'
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var myArray = '$(array)'
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var myArray = '$(array)'
  return myArray.pop()
}