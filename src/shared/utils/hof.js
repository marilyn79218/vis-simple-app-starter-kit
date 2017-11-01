const isArguementsEqual = equalityCheck => (args, lastArgs) => {
  if (lastArgs === null) {
    return false;
  }

  for (let index = 0; index < args.length; index++) {
    const ele = args[index];
    const lastEle = lastArgs[index];

    if (!equalityCheck(ele, lastEle)) {
      return false;
    }
  }

  return true;
};

const defaultEqualityCheck = (a, b) => a === b;

export const memoize = (func, equalityCheck = defaultEqualityCheck) => {
  let lastArgs = null;
  let result = null;

  const argEqualityCheck = isArguementsEqual(equalityCheck);

  return (...args) => {
    if (argEqualityCheck(args, lastArgs)) {
      return result;
    }

    lastArgs = args.slice();
    result = func(...args);
    return result;
  }
}
