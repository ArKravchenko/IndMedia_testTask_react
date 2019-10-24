import React, { Component, Fragment } from 'react';


import {store} from "./config/configureStore";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class Article extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('Article mounted');


  }

  componentDidUpdate(){
    // console.log(this.props.state);
  }

  render() {
    return (

      <div className={'container'}>
       <h1>This is an article</h1>
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

export default connect(mapStateToProp)(Article);