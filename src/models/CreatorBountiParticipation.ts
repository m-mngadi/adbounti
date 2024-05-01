import mongoose from "mongoose";

export const CreatorBountiParticipationSchema = new mongoose.Schema(
  {
    bountiId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bounti",
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContentCreator",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.CreatorBountiParticipation ||
  mongoose.model(
    "CreatorBountiParticipation",
    CreatorBountiParticipationSchema
  );
