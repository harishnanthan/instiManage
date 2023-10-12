import mongoose from "mongoose";
const { Schema } = mongoose;

const ExchangeSchema = new Schema({
  exchanger: {
    type: String,
    required: true,
  },
  openDate: {
    type: Date,
    default: Date.now,
  },
  closeDate: {
    type: Date,
  },
  lastModifiedDate: {
    type: Date,
    required: true,
  },
  accountBalance: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Exchange = mongoose.model("exchanges", ExchangeSchema);

export default Exchange;
