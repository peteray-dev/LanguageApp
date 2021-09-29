import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Language from './Pages/Card/Language';
import Learn from './Pages/Learn/Learn';
import FrontPage2 from './Pages/LandingPage/FrontPage2';
// import Login from './Pages/loginComponent/login-logout/login-logout';
import Register from './Pages/Register/Register';
import Translator from './Pages/Translator/Translator';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import SignInForm from './Pages/Login/login';
import LoginMain from './Pages/Login/LoginMain';
import ContactForm from './Pages/Contact/ContactForm';
import Team from './Pages/Team/team';
import Feed from './Pages/Community/Feed';
import Posts from './Pages/Posts/posts';
import { PrivateRoute } from './PrivateRoute';
import { getUserProfile } from './Actions/authActions';
import { bindActionCreators } from 'redux';

import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [languages, setLanguages] = useState([
    {
      id: 1,
      langName: 'Yoruba',
      category: [
        { id: 1, word: 'Alphabet' },
        { id: 1, word: 'Number' },
        { id: 1, word: 'Objects' },
        { id: 1, word: 'Family' },
        { id: 1, word: 'Greetings' },
        { id: 1, word: 'Phrases' },
      ],
    },
    {
      id: 2,
      langName: 'Urhobo',
      category: [
        { id: 1, word: 'Alphabet' },
        { id: 1, word: 'Number' },
        { id: 1, word: 'Objects' },
        { id: 1, word: 'Family' },
        { id: 1, word: 'Greetings' },
        { id: 1, word: 'Phrases' },
      ],
    },
    {
      id: 3,
      langName: 'Efik',
      category: [
        { id: 1, word: 'Alphabet' },
        { id: 1, word: 'Number' },
        { id: 1, word: 'Objects' },
        { id: 1, word: 'Family' },
        { id: 1, word: 'Greetings' },
        { id: 1, word: 'Phrases' },
      ],
    },
    {
      id: 4,
      langName: 'Igbo',
      category: [
        { id: 1, word: 'Alphabet' },
        { id: 1, word: 'Number' },
        { id: 1, word: 'Objects' },
        { id: 1, word: 'Family' },
        { id: 1, word: 'Greetings' },
        { id: 1, word: 'Phrases' },
      ],
    },
    {
      id: 5,
      langName: 'Hausa',
      category: [
        { id: 1, word: 'Alphabet' },
        { id: 1, word: 'Number' },
        { id: 1, word: 'Objects' },
        { id: 1, word: 'Family' },
        { id: 1, word: 'Greetings' },
        { id: 1, word: 'Phrases' },
      ],
    },
    {
      id: 6,
      langName: 'Nupe',
      category: [
        { id: 1, word: 'Alphabet' },
        { id: 1, word: 'Number' },
        { id: 1, word: 'Objects' },
        { id: 1, word: 'Family' },
        { id: 1, word: 'Greetings' },
        { id: 1, word: 'Phrases' },
      ],
    },
  ]);

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const getUser = bindActionCreators(getUserProfile, dispatch);
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {/* <Route path="/blog" component={Blog}/> */}
      <Route
        path="/blog"
        exact
        render={({ routerProps }) => <Blog {...routerProps} />}
      />
      <Route
        exact
        path="/blog/:id"
        render={({ routerProps }) => <BlogDetails {...routerProps} />}
      />

      <Route
        exact
        path="/"
        render={({ routerProps }) => (
          <FrontPage2
            {...routerProps}
            isAuthenticated={state.isAuthenticated}
          />
        )}
      />

      <Route path="/register" component={Register} />
      <Route path="/login" component={LoginMain} />

      <Route path="/translator" component={Translator} />

      <Route path="/contact" component={ContactForm} />

      <Route path="/team" component={Team} />

      <Route
        path="/learn"
        render={(routerProps) => (
          <Learn {...routerProps} languages={languages} />
        )}
      />
      <Route
        path="/language"
        render={(routerProps) => {
          return <Language {...routerProps} languages={languages} />;
        }}
      />

      <Route
        path="/community"
        render={(routerProps) => {
          return <Feed {...routerProps} />;
        }}
      />

      <PrivateRoute
        currentUser={state.user}
        path="/posts"
        roles={['admin']}
        exact
        component={Posts}
      />
      {/* <Route path="/posts" component={Posts} /> */}
      {/* <Route
          path="/posts"
          render={(routerProps) => {
            return <Posts {...routerProps} />;
          }}
        /> */}
    </>
  );
};

export default App;
