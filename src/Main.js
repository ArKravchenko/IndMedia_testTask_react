import React, { Component, Fragment } from 'react';


import {store} from "./config/configureStore";

import { Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';


class Main extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('Main mounted');
  }

  componentDidUpdate(){
    console.log(this.props.state);
  }

  renderAuthors(authors){
    return authors.map((item)=>
      <li className="navigation_item" key={item.id}>
      <NavLink
        to="/author"
        className="text-decoration-none text-uppercase"
        activeClassName="navigation_item--active"
      >
        {item.name}
      </NavLink>
    </li>
    )
  }

  renderArticles(articles){
    return articles.map((item)=>
      <li className="navigation_item" key={item.id}>
        <NavLink
          to="/article"
          className="text-decoration-none text-uppercase"
          activeClassName="navigation_item--active"
        >
          {item.title}
        </NavLink>
      </li>
    )
  }

  render() {
    return (

      <div className="container-fluid p-0">

        <div className=" container-fluid p-0 ">
          <div className="container-fluid navigation p-0 pt-3">
            <div className="container">
              <h2 className="text-center text-light mt-3">Authors</h2>
              <ul className="d-inline-block flex-row">
                {this.renderAuthors(this.props.state.authors)}
              </ul>
            </div>
          </div>
        </div>

        <div className=" container-fluid p-0 ">
          <div className="container-fluid navigation bg-orange p-0 pt-3">
            <div className="container">
              <h2 className="text-center text-light mt-3">Articles</h2>
              <ul className="d-inline-block flex-row">
                {this.renderArticles(this.props.state.articles)}
              </ul>
            </div>
          </div>
        </div>
      </div>


    );
  }
}



const mapStateToProp = (state) => ({
  state: state.MainPage,
});



export default connect(mapStateToProp)(Main);