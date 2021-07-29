const Post = require('../models/Post');

const User = require('../models/User');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.status(200).json({
      status: 'success',
      message: posts,
      'post numbers': posts.length,
    });
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    // const newPost = new Post({
    //     text: req.body.text,
    //     name: req.body.name,
    //     user: req.user.id
    //   });
    const createPost = await Post.create(req.body);
    res.status(200).json({
      status: 'success',
      message: createPost,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSinglePost = async (req, res, next) => {
  try {
    const singlePost = await Post.findById({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      message: singlePost,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const del = await Post.findByIdAndDelete({ _id: req.params.id });

    res.status(200).json({
      status: `${del.name} deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};

// Like

exports.likePost = (req, res, next) => {
  User.findOne({ user: req.user.id }).then((profile) => {
    // console.log(req.user)
    Post.findById(req.params.id)
      .then((post) => {
        if (
          post.likes.filter((like) => like.user.toString() === req.user.id)
            .length > 0
        ) {
          return res
            .status(400)
            .json({ alreadyliked: 'User already liked this post' });
        }

        // add user id to likes array
        post.likes.unshift({ user: req.user.id });
        post.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
  });

  // try {
  //   const profile = await User.findOne({ user: req.user.id });
  //   const post = await Post.findById({ _id: req.params.id });

  //   if (
  //     post.likes.filter((like) => like.user.toString() === req.user.id).length >
  //     0
  //   ) {
  //     return res
  //       .status(400)
  //       .json({ alreadyliked: 'User already liked this post' });
  //   }
  //   const userLike = post.likes.unshift({ user: req.user.id });

  //   res.status(200).json({
  //     status: 'success',
  //     message: { post, userLike },
  //   });
  // } catch (error) {
  //   next(error);
  // }
};

exports.unlikePost = (req, res, next) => {
  User.findOne({ user: req.user.id }).then((profile) => {
    Post.findById(req.params.id)
      .then((post) => {
        if (
          post.likes.filter((like) => like.user.toString() === req.user.id)
            .length === 0
        ) {
          return res
            .status(400)
            .json({ notliked: 'You have not yet liked this post' });
        }

        // get index on item to remove from like array
        const removeIndex = post.likes
          .map((item) => item.user.toString())
          .indexOf(req.user.id);

        // remove from array
        post.likes.splice(removeIndex, 1);

        // save
        post.save().then((post) => res.json(post));
      })
      .catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
  });
};

exports.commentPost =  (req, res, next) => {
  // try {
  //   const comment = await Post.create(req.body);

  //   const commentPost = await Post.comments.unshift(comment);

  //   res.status(200).json({
  //     status: 'success',
  //     message: commentPost,
  //   });
  // } catch (error) {
  //   next(error);
  // }

  //check validation
  // const { errors, isValid } = ValidatePostInput(req.body);

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  Post.findById(req.params.id)
    .then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        imgUrl: req.body.imgUrl,
        user: req.user.id
      };
// console.log(req.user.name);
  // add to comments array
  post.comments.unshift(newComment);

  // save comment
    post.save().then(post => res.json(post));
  })
  .catch(err => res.status(404).json({ postnotfound: "No post found" }));
};


exports.deleteComment = (req, res, next)=>{
   Post.findById(req.params.id)
      .then(post => {
        // check to see if comment exists
        console.log(post.comments);
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: "Comment does not exist" });
        }

        // get remove index

        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // remove comment
        post.comments.splice(removeIndex, 1);

        // save
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
}