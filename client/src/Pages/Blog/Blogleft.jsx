import React, { Component } from 'react';
import './Blog.css';
import { FaUserAlt, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function   BlogLeft(props) {
  console.log(props);
  return (
    <>
      {props.blogDetails.map((item) => {
        return (
          <>
            <article className="blog_item" key={item.id}>
              <div className="blog_item_img">
                <div className="card-img-main">
                  <img className="card-img rounded-0" src={item.image} alt="" />
                </div>

                <a href="#" className="blog_item_date">
                  <h3>{item.day}</h3>
                  <p>{item.month}</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>{item.head}</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="#">
                      <i className="fa fa-user"></i> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaUserAlt /> 03 Comments
                    </a>
                  </li>
                </ul>

                <Link
                  className="button rounded-0 primary-bg text-white w-60 btn_1 boxed-btn"
                  type="submit"
                  to={`/blog/${item.id}`}
                >
                  Read More <FaAngleDoubleRight />
                </Link>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
}
// class BlogLeft extends Component {
//     state = {  }
//     render() {
//         return (
//             <>
//             <div className="blog_left_sidebar">
//                   <article className="blog_item">
//                     <div className="blog_item_img">
//                       <img
//                         className="card-img rounded-0"
//                         src={img2}
//                         alt=""
//                       />
//                       <a href="#" className="blog_item_date">
//                         <h3>15</h3>
//                         <p>Jan</p>
//                       </a>
//                     </div>
//                     <div className="blog_details">
//                       <a className="d-inline-block" href="single-blog.html">
//                         <h2>Google inks pact for new 35-storey office</h2>
//                       </a>
//                       <p>
//                         That dominion stars lights dominion divide years for
//                         fourth have don't stars is that he earth it first
//                         without heaven in place seed it second morning saying.
//                       </p>
//                       <ul className="blog-info-link">
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-user"></i> Travel, Lifestyle
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-comments"></i> 03 Comments
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </article>
//                   <article className="blog_item">
//                     <div className="blog_item_img">

//                       <img
//                         className="card-img rounded-0"
//                         src={img}
//                         alt=""
//                       />
//                       <a href="#" className="blog_item_date">
//                         <h3>15</h3>
//                         <p>Jan</p>
//                       </a>
//                     </div>
//                     <div className="blog_details">
//                       <a className="d-inline-block" href="single-blog.html">
//                         <h2>Google inks pact for new 35-storey office</h2>
//                       </a>
//                       <p>
//                         That dominion stars lights dominion divide years for
//                         fourth have don't stars is that he earth it first
//                         without heaven in place seed it second morning saying.
//                       </p>
//                       <ul className="blog-info-link">
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-user"></i> Travel, Lifestyle
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-comments"></i> 03 Comments
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </article>
//                   <article className="blog_item">
//                     <div className="blog_item_img">
//                       <img
//                         className="card-img rounded-0"
//                         src={img2}
//                         alt=""
//                       />
//                       <a href="#" className="blog_item_date">
//                         <h3>15</h3>
//                         <p>Jan</p>
//                       </a>
//                     </div>
//                     <div className="blog_details">
//                       <a className="d-inline-block" href="single-blog.html">
//                         <h2>Google inks pact for new 35-storey office</h2>
//                       </a>
//                       <p>
//                         That dominion stars lights dominion divide years for
//                         fourth have don't stars is that he earth it first
//                         without heaven in place seed it second morning saying.
//                       </p>
//                       <ul className="blog-info-link">
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-user"></i> Travel, Lifestyle
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-comments"></i> 03 Comments
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </article>
//                   <article className="blog_item">
//                     <div className="blog_item_img">
//                       <img
//                         className="card-img rounded-0"
//                         src={img}
//                         alt=""
//                       />
//                       <a href="#" className="blog_item_date">
//                         <h3>15</h3>
//                         <p>Jan</p>
//                       </a>
//                     </div>
//                     <div className="blog_details">
//                       <a className="d-inline-block" href="single-blog.html">
//                         <h2>Google inks pact for new 35-storey office</h2>
//                       </a>
//                       <p>
//                         That dominion stars lights dominion divide years for
//                         fourth have don't stars is that he earth it first
//                         without heaven in place seed it second morning saying.
//                       </p>
//                       <ul className="blog-info-link">
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-user"></i> Travel, Lifestyle
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-comments"></i> 03 Comments
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </article>
//                   <article className="blog_item">
//                     <div className="blog_item_img">
//                       <img
//                         className="card-img rounded-0"
//                         src={img}
//                         alt=""
//                       />
//                       <a href="#" className="blog_item_date">
//                         <h3>15</h3>
//                         <p>Jan</p>
//                       </a>
//                     </div>
//                     <div className="blog_details">
//                       <a className="d-inline-block" href="single-blog.html">
//                         <h2>Google inks pact for new 35-storey office</h2>
//                       </a>
//                       <p>
//                         That dominion stars lights dominion divide years for
//                         fourth have don't stars is that he earth it first
//                         without heaven in place seed it second morning saying.
//                       </p>
//                       <ul className="blog-info-link">
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-user"></i> Travel, Lifestyle
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#">
//                             <i className="fa fa-comments"></i> 03 Comments
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </article>
//                   <nav className="blog-pagination justify-content-center d-flex">
//                     <ul className="pagination">
//                       <li className="page-item">
//                         <a href="#" className="page-link" aria-label="Previous">
//                           <i className="ti-angle-left"></i>
//                         </a>
//                       </li>
//                       <li className="page-item">
//                         <a href="#" className="page-link">
//                           1
//                         </a>
//                       </li>
//                       <li className="page-item active">
//                         <a href="#" className="page-link">
//                           2
//                         </a>
//                       </li>
//                       <li className="page-item">
//                         <a href="#" className="page-link" aria-label="Next">
//                           <i className="ti-angle-right"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>

//             </>
//          );
//     }
// }

// export default BlogLeft;
