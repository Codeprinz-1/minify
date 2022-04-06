import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema<LinkType>({
  createDate: { type: String, requiredt: true },
  daysToLive: { type: Number, required: true },
  slug: { type: String, required: true },
  url: { type: String, required: true },
});

export default mongoose.model<LinkType>("Link", LinkSchema);
