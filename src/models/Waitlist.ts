import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Waitlist ||
  mongoose.model("Waitlist", WaitlistSchema);
