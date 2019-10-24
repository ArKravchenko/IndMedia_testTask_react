import React, { Component } from 'react';


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
    // console.log(this.props.state);
  }

  renderAuthors(authors){
    return authors.map((item)=>
      <li className="navigation_item" key={item.id}>
      <NavLink
        to={`/author_${item.id}`}
        className="text-decoration-none text-uppercase"
        activeClassName="navigation_item--active"
      >
        {item.name}
      </NavLink>
    </li>
    )
  }

  renderArticles(articles){

    let authors = this.props.state.authors;
    let readArticles = this.props.state.readArticles;

    return articles.map(function(item){
      let author = authors.filter((authorItem)=>authorItem.id == item.userId
        ? true
        : false
      )[0];


      return <li className="" key={item.id}>
        <NavLink
          to={`/article_${item.id}`}
          className="text-decoration-none text-uppercase"
        >
          <span className={readArticles.indexOf(item.id)!=-1
            ? "read"
            : ""
          }>{item.title}</span>
        </NavLink>
        <p className="pl-3">{item.body.slice(0,255)}</p>
          {author? <p className="text-right"><Link to={`/author_${author.id}`}>{author.name}</Link></p> : null}
      </li>
    }
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


        <div className="container">
          <h2 className="text-center text-dark mt-3">Articles</h2>
          <ul className="d-inline-block flex-row">
            {this.renderArticles(this.props.state.articles)}
          </ul>
        </div>


          <div className="container pt-3">

              <div className="card-deck">
                  <div className="row text-center">




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