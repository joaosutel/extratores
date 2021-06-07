import axios from 'axios';

import { baseUrl, apiToken } from '../../../auth/auth.mjs';
import { infoLog, errorLog } from '../../../../util/logMessage.mjs';

const dataset = 'covid19';
const tableName = 'caso_full';

export default async (apiFilters) => {
  const url = `${baseUrl}/${dataset}/${tableName}/data/?${apiFilters}&page_size=7000`;
  infoLog(`Extracting data from ${url}`);

  return await axios
    .get(url, {
      headers: {
        Authorization: `token ${apiToken}`,
      },
    })
    .then((res) => {
      return res.data.results;
    })
    .then((data) => {
      infoLog(`${data.length} rows obtained.`);
      return data.map((item) => {
        return {
          state: item.state,
          cityIbgeCode: item.city_ibge_code,
          city: item.city,
          placeType: item.place_type,
          epidemiologicalWeek: item.epidemiological_week,
          date: item.date,
          availableDate: item.last_available_date,
          population: item.estimated_population,
          populationIn2019: item.estimated_population_2019,
          casesConfirmed: item.last_available_confirmed,
          casesConfirmedPer100kInhabitants:
            item.last_available_confirmed_per_100k_inhabitants,
          deaths: item.last_available_deaths,
          deathRate: item.last_available_death_rate,
          newCases: item.new_confirmed,
          newDeaths: item.new_deaths,
        };
      });
    })
    .catch((error) => {
      errorLog(error);
    });
};
