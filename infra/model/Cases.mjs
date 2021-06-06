import mongoose from 'mongoose';
const { Schema } = mongoose;

const casesSchema = new Schema({
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

const casesModel = mongoose.model('cases', casesSchema);

export default casesModel;
