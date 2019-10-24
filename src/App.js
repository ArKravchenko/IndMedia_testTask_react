import React, { Component, Fragment } from 'react';

import './scss/components/App.scss';
import {store} from "./config/configureStore";

import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import { Provider, connect } from 'react-redux';

import Article from './Article';
import Author from './Author';
import Main from './Main';

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
              render={(routeProps) => <Main {...routeProps} />}
            />
            <Route
              exact
              path="/article"
              render={(routeProps) => <Article {...routeProps} />}
            />
            <Route
              exact
              path="/author"
              render={(routeProps) => <Author {...routeProps} />}

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