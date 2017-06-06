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
  it('handles template expression with array', () => {
    const expectedResult = {foo: [1, 2]};
    const result = parse`
      foo: ${[1, 2]}
    `;
    expect(result).to.deep.equal(expectedResult);
  });
  it('handles template expression with string', () => {
    const expectedResult = {foo: 'bar'};
    const result = parse`
      foo: ${'bar'}
    `;
    expect(result).to.deep.equal(expectedResult);
  });
  it('handles template expression with function', () => {
    const replacement = function() {};
    const expectedResult = {foo: replacement};
    const result = parse`
      foo: ${replacement}
    `;
    expect(result).to.deep.equal(expectedResult);
  });
});
