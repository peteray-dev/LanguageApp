import React, { Component } from 'react';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
const Pagination = () => {
    return ( 
        <>
        <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                          <FaAngleLeft/>
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link" aria-label="Next">
                          <FaAngleRight/>
                        </a>
                      </li>
                    </ul>
                  </nav>
        
        </>
     );
}
 
export default Pagination;