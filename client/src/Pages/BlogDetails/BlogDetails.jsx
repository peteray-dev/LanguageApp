import React, { Component } from 'react';
import BlogData from '../Blog/BlogData';
import '../Blog/Blog.css';

import { withRouter } from 'react-router-dom';

import SearchBlog from '../Blog/SearchBlog';
import RecentPost from '../Blog/RecentPost';
import TagCloud from '../Blog/TagCloud';
import MediaFeed from '../Blog/MediaFeed';
import Newsletter from '../Blog/Newsletter';
import NavFront from '../LandingPage/NavFront';
import Footer from '../LandingPage/FooterFront';
import BlogInfo from './BlogLeftDetails';
import { FaUserAlt, FaCommentAlt } from 'react-icons/fa';

class BlogDetails extends Component {
  state = {
    Blog: BlogData,
  };

  render() {
    const { id } = this.props.match.params;
    console.log(id)

    return (
      <>
        <NavFront />

        <section class="container" style={{marginTop: '100px'}}>
          <div class="row">
            <div class="col-lg-8 posts-list">
              <div class="single-post">
                <div class="feature-img">
                  <img
                    class="img-fluid"
                    src="assets/img/blog/single_blog_1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <BlogInfo blog={this.state.Blog} id={id}/>
              {/* <div class="comments-area">
                <h4>05 Comments</h4>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src="assets/img/blog/comment_1.png" alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Emilly Blunt</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase">
                              reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src="assets/img/blog/comment_2.png" alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Emilly Blunt</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase">
                              reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        <img src="assets/img/blog/comment_3.png" alt="" />
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <a href="#">Emilly Blunt</a>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <a href="#" class="btn-reply text-uppercase">
                              reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <SearchBlog />
                <RecentPost recentPost={this.state.Blog} />

                <TagCloud />
                <MediaFeed mediaFeed={this.state.Blog} />
                <Newsletter
                  onHandleChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default withRouter(BlogDetails);
