import Covid19 from './datasets/covid19/index.mjs';

import { infoLog, errorLog } from '../util/logMessage.mjs';

export const extractDatasets = (async () => {
  try {
    infoLog(`[BrasilIO]: https://api.brasil.io/`);
    await Covid19();
  } catch (error) {
    errorLog(error);
  }
})();
