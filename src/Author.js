import React, { Component, Fragment } from 'react';


import {store} from "./config/configureStore";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class Author extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('Author mounted');

  }

  componentDidUpdate(){
    // console.log(this.props.state);
  }

  render() {
    return (

      <div className={'container'}>
        <h1>This is an Author</h1>
        <Link to={'/'}>
          <div className="btn btn-dark">
            Go back
          </div>
        </Link>
      </div>


    );
  }
}

const mapStateToProp = (state) => ({
  state: state.MainPage,
});

export default connect(mapStateToProp)(Author);