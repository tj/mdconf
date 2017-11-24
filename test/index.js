const expect = require('chai').expect;
const testUtils = require('./test-utils');
const parse = require('../index');

describe('mdconf integration tests', function() {
  let allTestCases;

  before(async function () {
    allTestCases = await testUtils.getTestCases();
  });

  it('should pass integration tests', function () {
    allTestCases.forEach(testCase => {
      describe('Test Case(s) for ' + testCase.testName, function () {
        it('should match expected output with no options', () => {
          expect(parse(testCase.md)).to.eql(testCase.json);
        });
      });
    });
  });
});
