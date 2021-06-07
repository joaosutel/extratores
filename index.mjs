import { extractDatasets as BrasilIO } from './BrasilIO/index.mjs';

import { infoLog, errorLog } from './util/logMessage.mjs';

try {
  await BrasilIO;

  infoLog(``);
  infoLog(`Execution completed!`);
} catch (error) {
  errorLog(error);
}
