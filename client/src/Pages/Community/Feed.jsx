import React, { Component } from 'react';
import Filter from './Filter';
import Post from './Post';
import PostForm from './Postform';


const categories = ['World', 'Business', 'Tech', 'Sport'];


export default class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [
        //   {category: categories[0], content: 'This is my first post!'},
        //   {category: categories[1], content: 'This is my second post!'}
        ],
        filteredPosts: []
      }
  
      this.handleNewPost = this.handleNewPost.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }
  
    handleNewPost(post) {
      this.setState({
        posts: this.state.posts.concat([post])
      });
    }
  
    handleFilter(filter) {
      this.setState({
        filteredPosts: this.state.posts.filter((post) =>
          // post.category.toUpperCase() === filter.toUpperCase() ||
            post.content.includes(filter)
        )
      });
    }
  
    render() {
      const posts = this.state.posts.map((post, index) =>
    
        <Post key={index} value={post} />
      );
      const filteredPosts = this.state.filteredPosts.map((post, index) =>
        <Post key={index} value={post} />
      );
      return (
        <div className="feed">
            
          <Filter onFilter={this.handleFilter} />
          {filteredPosts.length > 0 ? filteredPosts : posts}
          <PostForm onSubmit={this.handleNewPost} />
        </div>

        
      )
    }
  }
  
  