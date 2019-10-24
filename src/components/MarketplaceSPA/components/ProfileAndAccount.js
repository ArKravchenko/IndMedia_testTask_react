import React, { Component, Fragment } from 'react';
import {
  Route, Link, Switch, Redirect, NavLink,
} from 'react-router-dom';

import { store } from '../config/configureStore';
import { setMyOffers } from '../actions/myOffers';

import Profile from './Profile';
import Account from './Account';


class ProfileAndAccount extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {


    // console.log("");
    // console.log("");
    // console.log("");
    // store.dispatch(setMyOffers("data set by ProfileAndAccount component"));
    // console.log(`Store updated by ProfileAndAccount
    // component logged by ProfileAndAccount component`);
    // console.log(store.getState());

  }


  handleClick() {
    alert('Clicked');
  }


  render() {
    return (

      <>

        <div className="container-fluid navigation p-0 border-top">
          <div className="container">
            <ul className="d-inline-block flex-row">

              <li className="navigation_item">
                <NavLink
                  to={`${this.props.match.url}/profile`}
                  className="text-decoration-none text-uppercase"
                  activeClassName="navigation_item--active"
                >
                  profile

                </NavLink>
              </li>
              <li className="navigation_item">
                <NavLink
                  to={`${this.props.match.url}/account`}
                  className="text-decoration-none text-uppercase"
                  activeClassName="navigation_item--active"
                >
                  account
                </NavLink>
              </li>

            </ul>
          </div>
        </div>

        <div className="container">


          <Switch>
            <Route
              exact
              path={`${this.props.match.url}/profile`}
              render={(routeProps) => <Profile {...routeProps} />}
            />

            <Route
              exact
              path={`${this.props.match.url}/account`}
              render={(routeProps) => <Account {...routeProps} />}
            />
            <Redirect to={`${this.props.match.url}/profile`} />
          </Switch>


        </div>


      </>


    );
  }
}

export default ProfileAndAccount;
