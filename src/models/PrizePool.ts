import mongoose from "mongoose";

const PrizePoolSchema = new mongoose.Schema(
  {
    amountRemaining: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    totalAmount: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    distributionCycle: {
      type: String,
      required: true,
      default: "endOfDuration",
    },
    bountiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bounti",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.PrizePool ||
  mongoose.model("PrizePool", PrizePoolSchema);
