import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

import {
  Route, Link, Switch, Redirect,
} from 'react-router-dom';

import { store } from '../config/configureStore';

import { setMyOffers } from '../actions/myOffers.js';


class Account extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {


    // console.log("");
    // console.log("");
    // console.log("");
    // store.dispatch(setMyOffers("data set by MyOffers component"));
    // console.log("Store updated by MyOffers component logged by MyOffers component");
    // console.log(store.getState());


  }

  componentWillUnmount() {
    // console.log("App mounted");
    // alert()
  }


  handleClick() {
    alert('Clicked');
  }


  render() {
    return (

      <>


        <div className="mt-3">
          {/* <h3 className={"text-center"}>Manage e-mail addresses</h3> */}
          <div>
            <h5>The following e-mail addresses are associated with your account:</h5>
            <ul>
              <li className="m-3 mt-0">
                a.kravchenko@wcl.su
                <span className="badge badge-warning ml-2">Unverified</span>
                <span className="badge badge-info ml-2">Primary</span>
                <br />
                <div className="btn-group m-2 ml-0" role="group" aria-label="First group">
                  <div className="btn btn-secondary">Resend verification</div>
                  <div className="btn btn-secondary">Remove</div>
                </div>
              </li>
              <li className="m-3 mt-0">
                a.kravchenko2@wcl.su
                <span className="badge badge-success ml-2">Verified</span>
                <br />
                <div className="btn-group m-2 ml-0" role="group" aria-label="First group">
                  <div className="btn btn-secondary">Make primary</div>
                  <div className="btn btn-secondary">Resend verification</div>
                  <div className="btn btn-secondary">Remove</div>
                </div>
              </li>
              <li className="m-3 mt-0">
                a.kravchenko3@wcl.su
                <span className="badge badge-success ml-2">Verified</span>
                <br />
                <div className="btn-group  m-2 ml-0" role="group" aria-label="First group">
                  <div className="btn btn-secondary">Make primary</div>
                  <div className="btn btn-secondary">Resend verification</div>
                  <div className="btn btn-secondary">Remove</div>
                </div>
              </li>
            </ul>
          </div>


          <div className="border-top">
            <h5 className="mt-3">Add e-mail address:</h5>

            <Form className="m-3">
              <Form.Group controlId="addEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>


              <Button variant="secondary" type="submit">
                Add e-mail
              </Button>
            </Form>

          </div>
        </div>


      </>


    );
  }
}

export default Account;
