import mongoose from "mongoose";
import { RewardDistributionSchema } from "./RewardDistribution";

export const CreatorRewardSchema = new mongoose.Schema(
  {
    totalGrossAmount: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    amountThisMonth: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContentCreator",
      required: true,
    },
    rewards: [RewardDistributionSchema],
  },
  { timestamps: true }
);

export default mongoose.models.CreatorReward ||
  mongoose.model("CreatorReward", CreatorRewardSchema);
