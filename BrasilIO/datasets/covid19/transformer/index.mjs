import { format } from 'date-fns';

import { infoLog, errorLog } from '../../../../util/logMessage.mjs';

export default async (dataset) => {
  try {
    infoLog(`Renaming fields`);
    return dataset.map((item) => ({
      state: item.state,
      cityIbgeCode: item.placeType === 'state' ? null : item.cityIbgeCode,
      city: item.city,
      placeType: item.placeType,
      yearMonth: Number(format(new Date(item.date), 'yyyyMM')),
      epidemiologicalWeek: item.epidemiologicalWeek,
      date: new Date(item.date),
      availableDate: new Date(item.availableDate),
      population: item.population,
      populationIn2019: item.populationIn2019,
      casesConfirmed: item.casesConfirmed,
      casesConfirmedPer100kInhabitants: item.casesConfirmedPer100kInhabitants,
      deaths: item.deaths,
      deathRate: item.deathRate,
      newCases: item.newCases,
      newDeaths: item.newDeaths,
    }));
  } catch (error) {
    errorLog(error);
  }
};
