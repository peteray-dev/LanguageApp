import React, { Component } from 'react';

const MediaFeed = (props) => {
  return (
    <aside className="single_sidebar_widget instagram_feeds">
      <h4 className="widget_title">Our Media Feeds</h4>
      <ul className="instagram_row flex-wrap">
        {props.mediaFeed.map((item) => {
          return (
            <li>
              <a href="#">
                <img className="img-fluid" src={item.image} alt="media feeds" />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default MediaFeed;
