import React from 'react';
import './Translator.css';
import Nav from './Nav';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Components/NavBar/Navbar';
import Drawer from '../../Components/Drawer/Drawer';

//  const language = [
//      {Lang1: "English"},
//      {Lang2: "Yoruba"},
//      {Lang3: "Igbo"},
//  ]

export default function Translator() {
  return (
    <div>
      <Navbar />
      <Drawer />
      <div className="container whole">
        <h1 className="translate">Translator</h1>
        <div className="row">
          <div className="col left">
            <Nav />
            <Form className="form-left" />
          </div>
          <div className="col right">
            <Nav />
            <Form className="form-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
