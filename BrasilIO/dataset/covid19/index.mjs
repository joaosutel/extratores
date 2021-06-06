import extractApiData from './extractor/index.mjs';
import transformApiData from './transformer/index.mjs';

import { format, addDays } from 'date-fns';

const date = format(addDays(new Date(), -1), 'yyyy-MM-dd');

export default async (context) => {
  try {
    const apiData = await extractApiData(date);
    const modeledData = await transformApiData(apiData);

    console.log(modeledData);
  } catch (error) {
    throw new Error();
  }
};
