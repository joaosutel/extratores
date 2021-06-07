import { format, addDays } from 'date-fns';

import extractApiData from './extractor/index.mjs';
import transformApiData from './transformer/index.mjs';
import saveApiData from './loader/index.mjs';

import { infoLog, errorLog } from '../../../util/logMessage.mjs';

const dateToExtract = addDays(new Date(), -1);
const formattedDate = format(dateToExtract, 'yyyy-MM-dd');
const monthYear = Number(format(dateToExtract, 'yyyyMM'));
const dateFilter = `date=${formattedDate}`;

export default async (context) => {
  try {
    infoLog(`Starting data extraction on ${formattedDate}`);
    const apiData = await extractApiData(dateFilter);

    infoLog(`Modeling data obtained from the API`);
    const modeledData = await transformApiData(apiData, monthYear);

    infoLog(`Sending data to MongoDB`);
    await saveApiData(modeledData, formattedDate);
  } catch (error) {
    errorLog(error);
    throw new Error();
  }
};
