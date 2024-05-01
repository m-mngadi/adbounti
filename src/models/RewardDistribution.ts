import mongoose from "mongoose";

export const RewardDistributionSchema = new mongoose.Schema(
  {
    amount: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContentCreator",
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

export default mongoose.models.RewardDistribution ||
  mongoose.model("RewardDistribution", RewardDistributionSchema);
