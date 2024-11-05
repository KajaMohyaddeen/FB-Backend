// backend/models/Post.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);