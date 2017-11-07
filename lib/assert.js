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
};
