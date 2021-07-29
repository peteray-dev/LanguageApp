import React, { Component } from 'react';


export default class comment extends Component {
  constructor(props) {
    super(props);
    this.handleCommentPost = this.handleCommentPost.bind(this);
  }

  handleCommentPost(event) {
    this.props.onSubmit({
    //   category: this.category.value,
      comments: this.comments.value,
    });
    // this.category.value = categories[0];
    this.comments.value = '';
    event.preventDefault();
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleCommentPost}>
          {/* <label>
            Category:
            <select ref={(input) => (this.category = input)}>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label> */}
          <label>
            Content:
            <input type="text" ref={(input) => (this.comments = input)} />
          </label>
          <button className="button">Post</button>
        </form>
      </div>
    );
  }
}
