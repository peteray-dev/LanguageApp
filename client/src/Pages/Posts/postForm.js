import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../../common/TextAreaFieldGroup';
import { addPost } from '../../Actions/postActions';
// import { propTypes } from 'react-bootstrap/esm/Image'; 
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.errors) {
  //     this.setState({
  //       errors: newProps.errors,
  //     });
  //   }
  // }

  

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props)
    // const { user } = this.props.auth;
    const user =JSON.parse(localStorage.getItem('user')) 
    const newPost = {
      text: this.state.text,
      name: user.firstname,
    };
console.log(newPost)
console.log(user)
    this.props.addPost(newPost);
    this.setState({
      text: '',
    });

    console.log(this.props)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { errors } = this.state;
  //   const dispatch = useDispatch()
  // const addOnePost = bindActionCreators(addPost, dispatch)
  // const state = useSelector((state) => state.auth)
    return (
      <>
        <div className="post-form mb-3">
          <div className="card card-info">
            <div className="card-header bg-info text-white">
              What's on your mind?
            </div>

            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Create Post"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                  />
                </div>

                <button type="submit" className="btn btn-dark">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

PostForm.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPost })(PostForm);

// let RouterPostForm = withRouter(PostForm);

// export default RouterPostForm;