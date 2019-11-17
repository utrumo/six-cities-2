const REGEXP = /([-_][a-z])/g;

const convert = (string) => string.toUpperCase().replace(`_`, ``);

const getInCamel = (string) => string.replace(REGEXP, convert);

const isObject = (item) => (
  item === Object(item)
    && !Array.isArray(item)
    && typeof item !== `function`
);

const makeCamelCaseObject = (item) => {
  if (isObject(item)) {
    const result = {};

    for (const [key, value] of Object.entries(item)) {
      const camelKey = getInCamel(key);
      result[camelKey] = makeCamelCaseObject(value);
    }

    return result;

  } else if (Array.isArray(item)) {
    return item.map((it) => makeCamelCaseObject(it));
  }

  return item;
};

export {makeCamelCaseObject};
