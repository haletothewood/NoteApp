'use strict';

function testObject() {
  this.value = 3
}

var assert = {
  isEqual: function (assertion, assertionToCheck) {
    if (assertion === assertionToCheck) {
      return '   --Test passed'
    } else {
      return "   --Assertion failed: expected " + assertion + " but received " + assertionToCheck
    };
  },
  isNotNull: function (assertionToCheck) {
    if (assertionToCheck) {
      return '   --Test passed';
    } else {
      return "   --Assertion failed: expected " + assertionToCheck + " not to be null, but got null"
    };
  },
  isNull: function (assertionToCheck) {
    if (!assertionToCheck) {
      return '   --Test passed';
    } else {
      return "   --Assertion failed: expected " + assertionToCheck + " to be null, but didn't get null"
    };
  },
};

var test = new testObject();

var expect = function (description, test) {
  console.log(description)
  console.log(test);
}


expect("Test object to have a value of 5", assert.isEqual(5, test.value));
expect("Test object to have a value", assert.isNotNull(test.value));
expect("Test object to not have a value", assert.isNull(test.value));