import mongoose from "mongoose";

const PrizePoolPaymentSchema = new mongoose.Schema(
  {
    amount: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    prizePoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrizePool",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.PrizePoolPayment ||
  mongoose.model("PrizePoolPayment", PrizePoolPaymentSchema);
