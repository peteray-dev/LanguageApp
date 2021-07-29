import React, { Component } from 'react';

const RecentPost = (props) => {
  return (
    <>
      <aside className="single_sidebar_widget popular_post_widget">
        <h3 className="widget_title">Recent Post</h3>

        {props.recentPost.slice(0,3).map((item) => {
            return(

                <div className="media post_item">
              <div className="post_item_img">
                <img src={item.image} alt="post" className="post_img" />
              </div>
              <div className="media-body">
                <a href="single-blog.html">
                  <h3>{item.recentBlog}</h3>
                </a>
                <p>{item.time}</p>
              </div>
            </div>
            )
          
        })}
      </aside>
    </>
  );
};

export default RecentPost;
