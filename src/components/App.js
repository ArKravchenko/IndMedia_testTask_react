import React, {Component, Fragment} from 'react';
import {Button, Dropdown} from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // console.log('App mounted');
  }


  handleClick() {
    alert('Clicked');
  };


  render() {
    return (

      <Fragment>

        <p
          className="browsehappy"
        >
          You are using an
          <strong>outdated</strong>
          browser. Please
          <a
            href="http://browsehappy.com/"
          >
            upgrade your browser
          </a>
          to improve your experience.
        </p>

        <Button onClick={() => this.handleClick()} variant="primary">Primary</Button>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={() => this.handleClick()}>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => this.handleClick()}>Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => this.handleClick()}>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>




      </Fragment>


    );
  }
}

export default App;