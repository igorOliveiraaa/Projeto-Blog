const postModel = require('../models/postModel')

module.exports = {
  showAdminPage: (req, res) => {
    const posts = postModel.getAllPosts()
    res.render('admin', { posts })
  },

  showCreatePage: (req, res) => {
    res.render('create')
  },

  createPost: (req, res) => {
    const { title, content } = req.body

    const post = postModel.createPost(title, content)
    postModel.savePost(post)

    res.redirect('/admin')
  },

  showEditPage: (req, res) => {
    const { id } = req.params
    const post = postModel.getPostById(id)

    res.render('editPostForm', { post })
  },

  updatePost: (req, res) => {
    const { id } = req.params
    const { title, content } = req.body

    const updatedPost = { title, content }
    postModel.updatePost(id, updatedPost)

    res.redirect('/')
  },

  deletePost: (req, res) => {
    const { id } = req.params

    postModel.deletePost(id)

    res.redirect('/admin')
  }
}