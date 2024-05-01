import mongoose from "mongoose";

export const BountiEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      required: true,
    },
    viewCount: {
      type: Number,
      required: true,
    },
    commentCount: {
      type: Number,
      required: true,
    },
    uniqueCTA_url: {
      type: String,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContentCreator",
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

export default mongoose.models.BountiEntry ||
  mongoose.model("BountiEntry", BountiEntrySchema);
