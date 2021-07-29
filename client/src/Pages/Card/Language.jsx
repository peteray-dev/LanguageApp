import React, { Component } from "react";
import { withRouter } from "react-router";
import Accord from "../Card/Accordions";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import Drawer from "../../Components/Drawer/Drawer";

class Language extends Component {
  render() {
    const { languages, location, langName } = this.props;
    console.log(this.props)
    // console.log()

    //find will return an object, filter will return an array
    const singleLanguage = languages.find(
      (languages) => languages.langName === location.state.langName
    );

    
    //this picks the category from the unique id set for each language
    const item = singleLanguage.category.map((wordList) => {
      return (<Accord {...wordList} />);
    });



    return (
      <>
      <Navbar/>
      <Drawer/>
      
        <div style={{}}>
          <h1 style={{textAlign: 'center', margin: '50px 0px'}}>{singleLanguage.langName} Language</h1>
          <div className="container">{item}</div>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(Language);
