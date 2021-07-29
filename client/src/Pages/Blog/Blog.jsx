import React, { Component } from 'react';
import './Blog.css';

import BlogLeft from './Blogleft';
import Pagination from './Pagination';
import SearchBlog from './SearchBlog';
import RecentPost from './RecentPost';
import TagCloud from './TagCloud';
import MediaFeed from './MediaFeed';
import Newsletter from './Newsletter';
import NavFront from '../LandingPage/NavFront';
import Footer from '../LandingPage/FooterFront';
import BlogData from './BlogData';

class Blog extends Component {
  state = {
    Blog: BlogData,
  };

  render() {
    console.log(this.state.Blog);
    return (
      <>
        <NavFront />

        <section className="blog_area section-padding">
          <div className="container">
            <h1>Blog</h1>
            <div className="row justify-content-between">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <BlogLeft blogDetails={this.state.Blog} />
                  {/* <BlogLeft/> */}
                  <Pagination />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <SearchBlog />
                  <RecentPost recentPost={this.state.Blog} />
                  {/* <RecentPost/> */}
                  <TagCloud />
                  <MediaFeed mediaFeed={this.state.Blog} />
                  {/* <MediaFeed/> */}
                  <Newsletter
                    onHandleChange={this.handleChange}
                    value={this.state.email}
                  />
                  {/* <Newsletter/> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Blog;

{
  /* <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#" className="d-flex">
                          <p>Resaurant food</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Travel news</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Modern technology</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Product</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Inspiration</p>
                          <p>21</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Health Care (21)</p>
                          <p>09</p>
                        </a>
                      </li>
                    </ul>
                  </aside> */
}
