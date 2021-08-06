import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './postItem';

class PostFeed extends Component {
  render() { 
    const { message } = this.props.posts;
    console.log(this.props)
    if(message){
      return message.map((post) => <PostItem key={post._id} post={post} />)
    }else{
      return <p>whatsssss</p>
    }
    ;
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostFeed;
