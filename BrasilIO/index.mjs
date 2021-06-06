import Covid19 from './dataset/covid19/index.mjs';

export const extractDatasets = (async () => {
  await Covid19();
})();
