var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift ("foo")
 return array
}

function addElementToEndOfArray(array, element) {
  return [...array, "foo"]
}