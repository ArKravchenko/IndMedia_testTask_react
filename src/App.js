import React, { Component } from 'react';
import loadable from '@loadable/component';

import {store} from "./config/configureStore";

import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import { Provider, connect } from 'react-redux';

// import Article from './components/Article';
// import Author from './components/Author';
// import Main from './components/Main';

const Article = loadable(() => import('./components/Article'));
const Author = loadable(() => import('./components/Author'));
const Main = loadable(() => import('./components/Main'));



import { setAuthors, setArticles, setArticlesFail, setArticlesStatus, setAuthorsFail, setAuthorsStatus } from './actions/mainPage';


class App extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('App mounted');

    this.loadArticles();

    this.loadAuthors();

  }



  loadArticles () {
    store.dispatch(setArticlesStatus(true));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else return new Promise.reject();
      })
      .then((data) => {
        store.dispatch(setArticles(data));
        store.dispatch(setArticlesStatus(false));
        // console.log(store.getState());
      })
      .catch(() => {
        store.dispatch(setArticlesStatus(false));
        store.dispatch(setArticlesFail(true));
        // console.log(store.getState());
      });
  }




  loadAuthors () {
    store.dispatch(setAuthorsStatus(true));
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else return new Promise.reject();
      })
      .then((data) => {
        store.dispatch(setAuthors(data));
        store.dispatch(setAuthorsStatus(false));
        // console.log(store.getState());
      })
      .catch(() => {
        store.dispatch(setAuthorsStatus(false));
        store.dispatch(setAuthorsFail(true));
        // console.log(store.getState());
      });
  }




  render() {
    return (

      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <Main {...routeProps} fallback={<div className="container m-0 text-center d-flex flex-column justify-content-center" style={{height:'100vh'}}>Loading...</div>} />}
            />
            <Route
              exact
              path="/article_:id"
              render={(routeProps) => <Article {...routeProps} fallback={<div className="container m-0 text-center d-flex flex-column justify-content-center" style={{height:'100vh'}}>Loading...</div>}/>}
            />
            <Route
              exact
              path="/author_:id"
              render={(routeProps) => <Author {...routeProps} fallback={<div className="container m-0 text-center d-flex flex-column justify-content-center" style={{height:'100vh'}}>Loading...</div>}/>}

            />
            <Route render={(routeProps) => (
              <Redirect from="/*" to="/" />
            )}
            />

          </Switch>

        </Router>
      </Provider>


    );
  }
}

export default App;