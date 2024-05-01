import mongoose from "mongoose";
import { BountiEntrySchema } from "./BountiEntry";
import { CreatorRewardSchema } from "./CreatorReward";

const ContentCreatorSchema = new mongoose.Schema(
  {
    entries: [BountiEntrySchema],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    creatorRewardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CreatorReward",
      required: true,
    },
    // Attach PayPal payment method to recieve rewards
  },
  { timestamps: true }
);

export default mongoose.models.ContentCreator ||
  mongoose.model("ContentCreator", ContentCreatorSchema);
