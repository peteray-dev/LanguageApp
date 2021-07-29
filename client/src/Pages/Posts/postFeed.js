import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './postItem';

class PostFeed extends Component {
  render() { 
    const { posts } = this.props;
    console.log(this.props)
    return posts.map((post) => <PostItem key={post._id} post={post} />);
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostFeed;
