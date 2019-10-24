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
    // console.log(this.props);
    // console.log(this.props.state.articles.filter((item)=>item.userId == this.props.match.params.id? true:false));

  }

  componentDidUpdate(){

  }


  renderArticles() {
    let articles = this.props.state.articles.filter((item) =>
      item.userId == this.props.match.params.id
        ? true
        : false);
    return articles.length === 0
      ? <p>У этого автора пока нет статей</p>
      : <ul>{articles.map((item) =>
            <Link
                to={`/article_${item.id}`}
                key={item.id}

            >
                <li className="text-decoration-none text-capitalize" >
                    <span
                        className={this.props.state.readArticles.indexOf(item.id)!=-1
                            ? "read"
                            : ""
                        }
                    >
                      {item.title}
                    </span>
                </li>
            </Link>
        )}
        </ul>;
  }

  render() {
    let author = this.props.state.authors.filter((item)=>item.id == this.props.match.params.id
        ? true
        : false
    )[0];


    return (

      <div className="container">
          {
            author
              ? <h1>{author.name}</h1>
              : <h1>Неизвестный автор</h1>
          }
          {
            author
              ? <p>Псевдоним: {author.username}</p>
              :null
          }

            {this.renderArticles()}

        <div className="row">
            <div className="col-12 m-2 text-center">
                <div className="btn btn-dark" onClick={()=>this.props.history.goBack()}>
                    Go back
                </div>

            </div>
            <div className="col-12 m-2 text-center">
                <Link to={'/'}>
                    <div className="btn btn-dark">
                        Go to the main page
                    </div>
                </Link>
            </div>
        </div>


      </div>


    );
  }
}

const mapStateToProp = (state) => ({
  state: state.MainPage,
});

export default connect(mapStateToProp)(Author);