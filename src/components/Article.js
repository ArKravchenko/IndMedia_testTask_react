import React, { Component, Fragment } from 'react';


import {store} from "../config/configureStore";
import { setReadArticle } from '../actions/mainPage';


import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class Article extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('Article mounted');
    store.dispatch(setReadArticle(Number(this.props.match.params.id)))

  }

  componentDidUpdate(){
    // console.log(this.props.state);
  }

  render() {
    let article =  this.props.state.articles.filter((item)=>item.id == this.props.match.params.id
      ? true
      : false
    )[0];


    let author = this.props.state.authors.filter((item)=>item.id == article.userId
        ? true
        : false
    )[0];


    return (

      <div className={'container'}>


       {article ? <h1 className="text-uppercase">{article.title}</h1> : null}
       {article ? <p>{article.body}</p> : null}
          {article && author? <p className="text-right"><Link to={`/author_${author.id}`}>{author.name}</Link></p> : null}


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

export default connect(mapStateToProp)(Article);