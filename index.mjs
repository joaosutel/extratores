import { extractDatasets as BrasilIO } from './BrasilIO/index.mjs';

import { infoLog, errorLog } from './util/logMessage.mjs';

const azureFunctionsContext = console;

try {
  await BrasilIO(azureFunctionsContext);

  infoLog(``);
  infoLog(`Execution completed!`);
} catch (error) {
  errorLog(error);
}
