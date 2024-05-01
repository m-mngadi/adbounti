import mongoose from "mongoose";
import { BountiEntrySchema } from "./BountiEntry";

const BountiLeaderboardSchema = new mongoose.Schema({
  entries: [BountiEntrySchema],
  bountiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bounti",
    required: true,
  },
});

export default mongoose.models.BountiLeaderboard ||
  mongoose.model("BountiLeaderboard", BountiLeaderboardSchema);
