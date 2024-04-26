import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Waitlist ||
  mongoose.model("Waitlist", WaitlistSchema);
