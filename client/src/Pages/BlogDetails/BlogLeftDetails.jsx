import React, { Component } from 'react';
import BlogData from '../Blog/BlogData';
import { FaUserAlt, FaCommentAlt } from 'react-icons/fa';

class BlogInfo extends Component {
  state = {
    blog: [this.props.blog],
  };
  render() {
    const id = this.props.id;
    // console.log(id);

    const blogger = this.state.blog.find((item) => {
      if (item.id === id) {
        console.log(item.id);
        console.log(id);
        return (
          <div class="blog_details" key={item.id}>
            <h2 style="color: #2d2d2d;">{item.heading}</h2>
            <ul class="blog-info-link mt-3 mb-4">
              <li>
                <a href="#">
                  <FaUserAlt /> {item.category}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaCommentAlt /> {item.comments}
                </a>
              </li>
            </ul>
            <p class="excert">{item.BlogDet}</p>
          </div>
        );
      }
    });

    console.log(blogger)
    return (
      <>
        <div class="single-post">
          <div class="feature-img">
            <img
              class="img-fluid"
              src="../../Assets/images/mainbg1.jpg"
              alt=""
            />
          </div>
          <div>
            {blogger}
          </div>
          
        </div>
        <div class="navigation-top">
          <div class="d-sm-flex justify-content-between text-center">
            <p class="like-info">
              <span class="align-middle">
                <i class="fa fa-heart"></i>
              </span>{' '}
              Lily and 4 people like this
            </p>
            <div class="col-sm-4 text-center my-2 my-sm-0"></div>
            <ul class="social-icons">
              <li>
                <a href="https://www.facebook.com/sai4ull">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-behance"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <div class="navigation-area">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div class="thumb">
                        <a href="#">
                          <img
                            class="img-fluid"
                            src="assets/img/post/preview.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="arrow">
                        <a href="#">
                          <span class="lnr text-white ti-arrow-left"></span>
                        </a>
                      </div>
                      <div class="detials">
                        <p>Prev Post</p>
                        <a href="#">
                          <h4 style="color: #2d2d2d;">
                            Space The Final Frontier
                          </h4>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div class="detials">
                        <p>Next Post</p>
                        <a href="#">
                          <h4 style="color: #2d2d2d;">Telescopes 101</h4>
                        </a>
                      </div>
                      <div class="arrow">
                        <a href="#">
                          <span class="lnr text-white ti-arrow-right"></span>
                        </a>
                      </div>
                      <div class="thumb">
                        <a href="#">
                          <img
                            class="img-fluid"
                            src="assets/img/post/next.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
        </div>
      </>
    );
  }
}

export default BlogInfo;

// const BlogInfo = ({ blog, id }) => {
//   console.log(id);
//   return (
//     <>

//     </>
//   );
// };

// export default BlogInfo;

// class BlogInfo extends Component {
//   state = {
//     Blog: BlogData,
//   };
//   render() {
//     // const { id } = this.props.match.params;
//     console.log(this.props.match);
//     return (

//     );
//   }
// }

// export default BlogInfo;
// // Blog: BlogData
