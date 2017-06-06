const { expect } = require('chai');
const { parse } = require('../index');

describe('parse', () => {
  it('handles single object correctly', () => {
    const expectedResult = {
      foo: 'bar'
    };
    const result = parse`
      foo: bar
    `;
    expect(result).to.deep.equal(expectedResult);
  });
  it('handles single string correctly', () => {
    const expectedResult = 'foo';
    const result = parse`foo`;
    expect(result).to.deep.equal(expectedResult);
  });
  it('handles single number correctly', () => {
    const expectedResult = 42;
    const result = parse`42`;
    expect(result).to.deep.equal(expectedResult);
  });
  it('handles single array correctly', () => {
    const expectedResult = ['foo', 'bar'];
    const result = parse`
      - foo
      - bar
    `;
    expect(result).to.deep.equal(expectedResult);
  });
});
