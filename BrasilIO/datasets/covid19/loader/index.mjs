import mongoose from 'mongoose';
import { format } from 'date-fns';

import ConnectionString from '../../../../infra/auth/db.mjs';
import CasesModel from '../../../../infra/model/Cases.mjs';
import { infoLog, errorLog } from '../../../../util/logMessage.mjs';

export default async (dataset, date) => {
  infoLog(`Connecting...`);
  mongoose.connect(
    ConnectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      infoLog(`Connected!`);
      infoLog(`Deleting old documents...`);
    }
  );

  await CasesModel.deleteMany({
    yearMonth: format(new Date(date), 'yyyyMM'),
    placeType: 'city',
  })
    .then((resp) =>
      infoLog(`${resp.deletedCount} deleted documents (placeType='city')`)
    )
    .catch((err) => errorLog(err));

  await CasesModel.deleteMany({
    date: new Date(date),
    placeType: 'state',
  })
    .then((resp) =>
      infoLog(`${resp.deletedCount} deleted documents (placeType='state')`)
    )
    .catch((err) => errorLog(err));

  await CasesModel.insertMany(dataset)
    .then((resp) => infoLog(`${resp.length} saved documents`))
    .catch((err) => errorLog(err));

  infoLog(`Disconnecting...`);

  mongoose.disconnect();
  infoLog(`Disconnected`);
};
