import mongoose from "mongoose";

const BountiPaymentSchema = new mongoose.Schema(
  {
    amount: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    bountiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bounti",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.BountiPayment ||
  mongoose.model("BountiPayment", BountiPaymentSchema);
