var assert = {
  isEqual: function (assertion, assertionToCheck) {
    if (assertion === assertionToCheck) {
      return('Test passed\n')
    } else {
      return("Assertion failed: expected " + assertion + " but received " + assertionToCheck + "\n")
    };
  },
  isNotNull: function (assertionToCheck) {
    if (assertionToCheck) {
      return('Test passed\n');
    } else {
      return("Assertion failed: expected " + assertionToCheck + " not to be null, but got null\n")
    };
  },
  isNull: function (assertionToCheck) {
    if (!assertionToCheck) {
      return('Test passed\n');
    } else {
      return("Assertion failed: expected " + assertionToCheck + " to be null, but didn't get null\n")
    };
  },
  isArray: function (assertionToCheck) {
    if (Array.isArray(assertionToCheck)) {
      return('Test passed\n');
    } else {
      return("Assertion failed: expected " + assertionToCheck + " to be an array, but it isn't\n")
    };
  },
  includes: function (assertion, assertionToCheck) {
    if (assertionToCheck.includes(assertion)) {
      return('Test passed\n');
    } else {
      return("Assertion failed: expected " + assertionToCheck + " to include " + assertion + ", but it wasn't found\n")
    };
  },
  changesByAmount: function (assertion, assertionToCheck, increment) {
    if (assertionToCheck.includes(assertion)) {
      return('Test passed\n');
    } else {
      return("Assertion failed: expected " + assertionToCheck + " to include " + assertion + ", but it wasn't found\n")
    };
  },
  isInstanceOf: function (assertion, assertionToCheck) {
    if (assertionToCheck instanceof assertion) {
      return('Test passed\n');
    } else {
      return("Assertion failed: expected " + assertionToCheck + " to be of type " + assertion + ", but it wasn't\n")
    };
  },
};
