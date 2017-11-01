export const setStateCompose = (...functions) => (...setStateArgs) =>
  functions.reduce(
    ((pV, cV) => ({
      ...pV,
      ...cV(...setStateArgs),
    })),
    {}
  );
