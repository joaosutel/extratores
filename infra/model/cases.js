import mongoose from 'mongoose';
const { Schema } = mongoose;

const CasesSchema = new Schema({
  regionIgbeCode: Number,
  region: String,
  stateIbgeCode: Number,
  state: String,
  cityIbgeCode: Number,
  city: String,
  placeType: String,
  yearMonth: Number,
  epidemiologicalWeek: Number,
  date: Date,
  availableDate: Number,
  population: Number,
  populationIn2019: Number,
  casesConfirmed: Number,
  casesConfirmedPer100kInhabitants: Number,
  deaths: Number,
  deathRate: Number,
  newCases: Number,
  newDeaths: Number,
});

const CasesModel = mongoose.model('CasesModel', CasesSchema);

export default CasesModel;
