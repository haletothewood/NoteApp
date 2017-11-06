'use strict';

function testObject() {
  this.value = 4;
}

var assert = {
  isEqual: function(assertion, assertionToCheck) {
    if (assertion === assertionToCheck) {
      return 'Test passed'
    } else {
      throw new Error("Assertion failed: expected " + assertion + " but received " + assertionToCheck)
    }
  }
}

var test = new testObject();
console.log(assert.isEqual(5, test.value));
