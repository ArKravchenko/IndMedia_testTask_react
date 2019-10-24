import React, {Component, Fragment} from "react";

import { Route, Link, Switch, Redirect} from "react-router-dom";

import {store} from "../config/configureStore"

import {setMyOffers} from "../actions/myOffers.js"



class MyOffers extends Component {

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
    alert("Clicked");
  };


  render() {

    return (

      <Fragment>

        <div className="container">
          <div className="bg-red d-flex flex-column flex-grow-0 p-3 m-3" style={{height:"70vh"}}>
            <h2 className={"text-center"}>
              My offers page
            </h2>

              <Link to={this.props.match.url+`/first`}
                    className="text-decoration-none text-black-50 "
              >
                first
              </Link>

                <br/>

              <Link to={this.props.match.url+`/second`}
                    className="text-decoration-none text-black-50"
              >
                second
              </Link>

                <br/>

              <Link to={this.props.match.url+`/third`}
                    className="text-decoration-none text-black-50"
              >
                third
              </Link>

                <br/>



            <Switch>
              <Route  exact path={this.props.match.url+`/first`} component={()=><div style={{width:"20vw", height:"20vh", backgroundColor:"green", margin:"auto"}}></div>} />
              <Route  exact path={this.props.match.url+`/second`} component={()=><div style={{width:"40vw", height:"40vh", backgroundColor:"green", margin:"auto"}}></div>} />
              <Route  path={this.props.match.url+`/third`} component={()=><div style={{width:"60vw", height:"60vh", backgroundColor:"green", margin:"auto"}}></div>} />
              <Redirect  to={this.props.match.url+`/first`}/>
            </Switch>


          </div>

        </div>


      </Fragment>


    );
  }
}

export default MyOffers;