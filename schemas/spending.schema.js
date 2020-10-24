const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO: UserId
const SpendingSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ['BYN', 'USD', 'EUR', 'RUB'],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: false,
      default: '',
    },
  },
  { 
    versionKey: false,
    timestamps: true, 
  },
);

const Spending = mongoose.model('Spending', SpendingSchema);

module.exports = Spending;
