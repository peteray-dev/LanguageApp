const { authorization, roles } = require('../controller/auth.controller');
const {
  getPosts,
  createPost,
  getSinglePost,
  deletePost,
  likePost,
  unlikePost,
  commentPost,
  deleteComment,
} = require('../controller/post.controller');
// const { create } = require('../models/Post')

const router = require('express').Router();

router.get('/', getPosts);

router.post('/new', authorization, createPost);

router.get('/:id', getSinglePost);

router.delete('/delete/:id', authorization, roles('admin'), deletePost);

router.post('/like/:id', authorization, likePost);

router.post('/unlike/:id', authorization, unlikePost);

router.post('/comment/:id', authorization, commentPost);

router.delete('/comment/:id/:comment_id', authorization, deleteComment);
module.exports = router;
