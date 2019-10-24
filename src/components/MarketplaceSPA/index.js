import React, { Component, Fragment } from 'react';
import {
  HashRouter as Router, Route, Link, Switch, NavLink, Redirect,
} from 'react-router-dom';

// import Logo from '-!svg-react-loader!../../img/logo.svg';

import { Provider, connect } from 'react-redux';
import { store } from './config/configureStore';


import MyOffers from './components/MyOffers.js';
import SellWatch from './components/SellWatch.js';
import ProfileAndAccount from './components/ProfileAndAccount.js';

import { setMyOffers } from './actions/myOffers.js';


class MarketplaceSPA extends Component {
  constructor(props) {
    super(props);

    // console.log("");
    // console.log("");
    // console.log("");
    // console.log("Store initial state logged by index component:");
    // console.log(store.getState());
  }


  componentDidMount() {


  }

  componentDidUpdate() {

  }


  // navigationMenuHandler(e) {
  //   [...document.querySelectorAll('.navigation_item')].map((elem) => elem.querySelector('a').classList.remove('navigation_item--active'));
  //   e.target.classList.add('navigation_item--active');
  // }


  render() {
    return (

      <Provider store={store}>


        <Router>
          <div>


            <div className=" container-fluid p-0 ">


              <div className="container-fluid navigation p-0">
                <div className="container">
                  <ul className="d-inline-block flex-row">

                    <li className="navigation_item">
                      <NavLink
                        to="/my_offers"
                        className="text-decoration-none text-uppercase"
                        activeClassName="navigation_item--active"
                      >
                        my offers

                      </NavLink>
                    </li>
                    <li className="navigation_item">
                      <NavLink
                        to="/sell_a_watch"
                        className="text-decoration-none text-uppercase"
                        activeClassName="navigation_item--active"
                      >
                        sell a watch
                      </NavLink>
                    </li>
                    <li className="navigation_item ">
                      <NavLink
                        to="/profile"
                        className="text-decoration-none text-uppercase"
                        activeClassName="navigation_item--active"
                      >
                        profile and account
                      </NavLink>
                    </li>
                    <li className="navigation_item ">
                      <NavLink
                        to="/random_address"
                        className="text-decoration-none text-uppercase"
                        activeClassName="navigation_item--active"
                      >
                        404
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="container-fluid p-0 ">


                <Switch>

                  <Redirect exact from="/" to="/sell_a_watch" />

                  <Route
                    path="/my_offers"
                    render={(routeProps) => <MyOffers {...routeProps} />}
                  />

                  <Route
                    path="/sell_a_watch"
                    render={(routeProps) => <SellWatch {...routeProps} />}

                  />

                  <Route
                    path="/profile"
                    render={(routeProps) => <ProfileAndAccount {...routeProps} />}
                  />

                  <Route render={(routeProps) => (
                    <>
                      <div
                        className="text-center p-3 m-3"
                        style={{ fontSize: '3rem', height: '70vh' }}
                      >
                        404 please navigate to another page
                      </div>
                    </>
                  )}
                  />

                </Switch>

              </div>
            </div>


          </div>
        </Router>


      </Provider>


    );
  }
}

export default MarketplaceSPA;
