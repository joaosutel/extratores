import { format } from 'date-fns';

export default async (dataset) => {
  return dataset.map((item) => ({
    regionIgbeCode: Number(String(item.cityIbgeCode).substr(0, 1)),
    stateIbgeCode: Number(String(item.cityIbgeCode).substr(0, 2)),
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
};
