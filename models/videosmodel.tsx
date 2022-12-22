export {};
const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  reviews: [],
});

export default mongoose.model.videos || mongoose.model("videos", videoSchema);
