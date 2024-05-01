import mongoose from "mongoose";
import { BountiSchema } from "./Bounti";

const BusinessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bounties: [BountiSchema],
    // Attach payment method for future payments
  },
  { timestamps: true }
);

export default mongoose.models.Business ||
  mongoose.model("Business", BusinessSchema);
