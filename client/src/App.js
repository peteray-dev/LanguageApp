import React from 'react';
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
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  state = {
    languages: [
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
    ],
  };
  render() {
    return (
      <>
        {/* <Route path="/blog" component={Blog}/> */}
        <Provider store={store}>
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

          <Route exact path="/" component={FrontPage2} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginMain} />

          <Route path="/translator" component={Translator} />

          <Route path="/contact" component={ContactForm} />

          <Route path="/team" component={Team} />

          <Route
            path="/learn"
            render={(routerProps) => (
              <Learn {...routerProps} languages={this.state.languages} />
            )}
          />
          <Route
            path="/language"
            render={(routerProps) => {
              return (
                <Language {...routerProps} languages={this.state.languages} />
              );
            }}
          />

          <Route
            path="/community"
            render={(routerProps) => {
              return <Feed {...routerProps} />;
            }}
          />

          <Route path="/posts" component={Posts} />
          {/* <Route
          path="/posts"
          render={(routerProps) => {
            return <Posts {...routerProps} />;
          }}
        /> */}
        </Provider>
      </>
    );
  }
}

export default App;
