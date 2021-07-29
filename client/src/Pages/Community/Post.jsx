import React, { Component } from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comments: [

          ]
        }
        this.handlecomment = this.handlecomment.bind(this);
      }
    
      handlecomment(e){
        this.setState({
          comments: e.target.value
        })
      }
      
  render() {
    return (
      <div className="post">
        <form onSubmit={this.handlecomment}>
          {/* <span className="label">{this.props.value.category}</span> */}
          <span className="content">{this.props.value.content}</span>
          <label>
            Content: 
            <input type="text" onChange={this.state.comments} />
          </label>
          <button className="button">Post</button>
        </form>
      </div>
    );
  }
}
