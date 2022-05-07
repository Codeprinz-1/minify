import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema<LinkType>({
  createDate: { type: String, required: true },
  expiryDate: { type: String, required: true },
  slug: { type: String, required: true },
  url: { type: String, required: true },
});

export default mongoose.model<LinkType>("Link", LinkSchema);
