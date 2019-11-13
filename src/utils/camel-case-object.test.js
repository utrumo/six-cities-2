import {makeCamelCaseObject} from './camel-case-object';

const testObject = {
  'firs_property': {
    'nested_property': [
      `first`,
      `second`, {
        'third': `nested`
      }
    ]
  },
  'third_property': [
    `first`
  ]
};

const resultObject = {
  'firsProperty': {
    'nestedProperty': [
      `first`,
      `second`, {
        'third': `nested`
      }
    ]
  },
  'thirdProperty': [
    `first`
  ]
};

it(`Must create new object with camelCase properties`, () => {
  expect(makeCamelCaseObject(testObject)).toEqual(resultObject);
});
