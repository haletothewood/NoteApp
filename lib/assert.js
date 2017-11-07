module.exports = {
  isEqual: function (assertion, assertionToCheck) {
    if (assertion === assertionToCheck) {
      return this.printPass('Test passed\n')
    } else {
      return this.printFail("Assertion failed: expected " + assertion + " but received " + assertionToCheck + "\n")
    };
  },
  isNotNull: function (assertionToCheck) {
    if (assertionToCheck) {
      return this.printPass('Test passed\n');
    } else {
      return this.printFail("Assertion failed: expected " + assertionToCheck + " not to be null, but got null\n")
    };
  },
  isNull: function (assertionToCheck) {
    if (!assertionToCheck) {
      return this.printPass('Test passed\n');
    } else {
      return this.printFail("Assertion failed: expected " + assertionToCheck + " to be null, but didn't get null\n")
    };
  },
  printFail: function (string) {
    return "\x1b[1;31m" + string + '\x1b[0m'
  },
  printPass: function (string) {
    return "\x1b[32m" + string + '\x1b[0m'
  }
};
