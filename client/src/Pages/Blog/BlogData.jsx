// import React, { Component } from 'react';
// import Blog from './Blog';
import img from '../../Assets/images/cultural_all2.jpg';
import img2 from '../../Assets/images/all_culture2.jpg';

const BlogData = [
  {
    id: '1',
    image: img,
    day: '15th',
    month: 'Jan',
    heading: 'Twitter Google inks pact for new 35-storey office',
    details:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: 'Travel, Lifestyle',
    BlogDet:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducLorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducimus?imus?',
    comments: '03 Comments',
    recentBlog: 'From life was you fish....',
    date: 'May 28, 2021',
    time: '5seconds ago',
  },
  {
    id: '2',
    image: img2,
    day: '14th',
    month: 'Jan',
    heading: 'twit Google inks pact for new 35-storey office',
    details:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: 'Travel, Lifestyle',
    BlogDet:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducLorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducimus?imus?',
    comments: '03 Comments',
    recentBlog: 'The Amazing Hubble',
    date: 'May 27, 2021',
    time: '15seconds ago',
  },
  {
    id: '3',
    image: img,
    day: '13th',
    month: 'Jan',
    heading: 'strenght Google inks pact for new 35-storey office',
    details:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: 'Travel, Lifestyle',
    BlogDet:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducLorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducimus?imus?',
    comments: '03 Comments',
    recentBlog: 'Asteroids telescope',
    date: 'May 26, 2021',
    time: '20mins ago',
  },
  {
    id: '4',
    image: img2,
    day: '12th',
    month: 'Jan',
    heading: 'spirit Google inks pact for new 35-storey office',
    details:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: 'Travel, Lifestyle',
    BlogDet:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducLorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducimus?imus?',
    comments: '03 Comments',
    recentBlog: 'Astronomy Or Astrology',
    date: 'May 25, 2021',
    time: '30mins ago',
  },
  {
    id: '5',
    image: img,
    day: '11th',
    month: 'Jan',
    heading: 'less Google inks pact for new 35-storey office',
    details:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: 'Travel, Lifestyle',
    BlogDet:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducLorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducimus?imus?',
    comments: '03 Comments',
    recentBlog: 'From life was you fish....',
    date: 'May 24, 2021',
    time: '1hr ago',
  },
  {
    id: '6',
    image: img,
    day: '10th',
    month: 'Jan',
    heading: 'dress Google inks pact for new 35-storey office',
    details:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    category: 'Travel, Lifestyle',
    BlogDet:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducLorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci a magni, eligendi maxime consequuntur facilis aut maiores porro nobis excepturi iste vel quisquam veniam est consequatur ad. Dolores, expedita ducimus?imus?',
    comments: '03 Comments',
    recentBlog: 'From life was you fish....',
    date: 'May 23, 2021',
    time: '50mins ago',
  },
];

// import BlogLeft from './Blogleft';
// import Pagination from './Pagination';
// import SearchBlog from './SearchBlog';
// import RecentPost from './RecentPost';
// import TagCloud from './TagCloud';
// import MediaFeed from './MediaFeed';
// import Newsletter from './Newsletter';
// import NavFront from '../LandingPage/NavFront';
// import Footer from '../LandingPage/FooterFront';

// class BlogData extends Component {
//     state = {
//         ,
//           email: ""
//      }

//      handleChange = (e)=>{
//         return(
//           this.setState({
//             email: e.target.value
//         })
//         )

//     }

//     render() {
//         console.log(this.state.Blog)
//         return (
//             <>
//                 <Blog Blog = {this.state.Blog}/>

//                 <BlogLeft blogDat={this.state.Blog} />

//                 <RecentPost recentPost={this.state.Blog}/>

//                 <MediaFeed mediaFeed = {this.state.Blog}/>

//                 <Newsletter onHandleChange = {this.handleChange} value={this.state.email}/>
//             </>
//          );
//     }
// }

export default BlogData;
