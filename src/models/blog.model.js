const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
});

const Blog = model('Blog', blogSchema);
module.exports = Blog;