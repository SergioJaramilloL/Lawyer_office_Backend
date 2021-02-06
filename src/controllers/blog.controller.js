const Blog = require('../models/blog.model');

module.exports = {
  async create (req, res) {
    try {
      const {
        title,
        content,
        image,
        link,
        featured
      } = req.body;
      const blog = await Blog.create({
        title,
        content,
        image,
        link,
        featured
      });
      res.status(201).json({ message: 'Blog successfully stored', data: blog });
    } catch ( error ) {
      res.status(400).json({ message: 'Blog could not be stored' });
    }
  },

  async list(req, res) {
    try {
      const blogs = await Blog.find();

      if( !blogs ) {
        throw new Error( 'Blogs list not found' );
      }
      res.status(200).json({ message: 'Blogs list found', data: blogs });
    } catch ( error ) {
      res.status(404).json({ message: 'Blogs not found' });
    }
  },

  async Show(req, res) {
    try {
      const { blogId } = req.params;
      const blog = await Blog.findById(blogId);

      if(!blog) {
        throw new Error('Blog not found');
      }
      res.status(200).json({ message: 'Blog found', data: blog });
    } catch {
      res.status(404).json({ message: 'Blog not found' });
    }
  },

  async update(req, res) {
    try{
      const { blogId } = req.params;
      const blog = await Blog.findByIdAndUpdate(blogId, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(200).json({ message: 'Blog updated', data: blog });
    } catch {
      res.status(400).json({ message: 'Blog could not be updated' });
    }
  },

  async destroy(req, res) {
    try {
      const { blogId } = req.params;
      const blog = await Blog.findByIdAndDelete(blogId);

      if(!blog) {
        throw new Error("Could not delete blog");
      }
      res.status(200).json({ message: 'Blog deleted', data: blog });
    } catch (error) {
      res.status(400).json({ message: 'Blog could not be deleted' });
    }
  },
};