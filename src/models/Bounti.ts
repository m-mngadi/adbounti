import mongoose from "mongoose";

export const BountiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    ctaUrl: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    paymentSettled: {
      type: Boolean,
      default: false,
    },
    bountiPaymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BountiPayment",
    },
    bountiLeaderboardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BountiLeaderboard",
    },
    prizePoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrizePool",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Bounti || mongoose.model("Bounti", BountiSchema);
