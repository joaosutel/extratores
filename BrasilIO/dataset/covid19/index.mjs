import extractApiData from './extractor/index.mjs';
import { format, addDays } from 'date-fns';

const date = format(addDays(new Date(), -1), 'yyyy-MM-dd');

export default async (context) => {
  try {
    const apiData = await extractApiData(date);
    console.log(apiData);
  } catch (error) {
    throw new Error();
  }
};
