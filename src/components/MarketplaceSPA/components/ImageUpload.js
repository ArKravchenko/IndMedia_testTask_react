import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { store } from '../config/configureStore';


class ImageUpload extends Component {
  constructor(props) {
    super(props);


    this.state = {
      files: this.props.files,
    };

    // console.log(store.getState().Profile.officePhotos);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.setReduxStore = this.setReduxStore.bind(this);
  }


  componentDidMount() {

  }


  setReduxStore() {
    const files = this.state.files.map((elem) => elem);

    // console.log("");
    // console.log("");
    // console.log("");
    store.dispatch(this.props.actionSet(files));

    // console.log("Store set by ImageUpload component")
    // console.log(store.getState());
  }


  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();

    const files = [...e.target.files];
    let i = 0;
    // let imagePreviewUrl=[...this.state.imagePreviewUrls];
    const list = [...this.state.files];

    reader.onloadend = () => {
      // list = [...this.state.imagePreviewUrls];
      // imagePreviewUrls.push(reader.result);
      list.push({ file: files[i], imagePreviewUrl: reader.result });
      this.setState({
        files: list,
        // files: files,
        // imagePreviewUrls: imagePreviewUrls,
      });
      // console.log(reader.result)

      i += 1;
      if (i < files.length) {
        reader.readAsDataURL(files[i]);
      } else {
        this.setReduxStore();
      }
    };

    reader.readAsDataURL(files[i]);
  }


  renderImages() {
    return this.state.files.map((elem, id) => (

      <div
        className="d-flex"
        key={`photo${id}`}
        style={{ position: 'relative' }}
      >
        <img
          src={elem.imagePreviewUrl}
          className="m-2"
          style={{
            width: 200,
            height: 200,
          }}
        />
        <div
          className="m-2"
          style={{
            width: 200,
            height: 200,
            position: 'absolute',
            top: 0,
            left: 0,
            // backgroundColor:"red",
            // opacity:0.2,
          }}
        >
          <i
            className="fas fa-times fa-2x d-block m-auto position-absolute text-black-50"
            style={{
              top: '10px',
              right: '10px',
              // opacity:0.5
              cursor: 'pointer',
            }}

            onClick={(e) => {
              const list = [...this.state.files];
              const index = list.map((elem) => elem.imagePreviewUrl).indexOf(elem.imagePreviewUrl);
              list.splice(index, 1);
              this.setState({ files: list }, () => this.setReduxStore());
            }}
          />

        </div>
      </div>
    ));
  }


  render() {
    return (

      <div>

        {/* hidden input element */}
        <input
          type="file"
          onChange={(e) => this.handleImageChange(e)}
          multiple
          style={{
            // width:200,
            // height:200,
            backgroundColor: 'orange',
            // display:"inline-block",
            display: 'none',
          }}
          className="m-2 "
          id={this.props.inputId}
        />


        <Form.Group
          style={{
            // width:"100%",
            // minHeight:200,
            borderRadius: 5,
            flexWrap: 'wrap',
            textWrap: 'wrap',
            justifyContent: 'start',
            backgroundColor: '#ddd',

          }}
          className="border mb-3 d-flex"
        >

          <div
            onClick={(e) => {
              ReactDOM.findDOMNode(this).querySelector(`#${this.props.inputId}`).click(e);
              // console.dir(ReactDOM.findDOMNode(this).querySelector("#"+this.props.inputId));
            }}


            style={{
              minWidth: 200,
              height: 200,
              // backgroundColor: "orange",
              display: 'flex',
              borderStyle: 'solid',
              borderWidth: '2px',
              borderRadius: '5px',
              borderColor: 'gray',
            }}
            className="m-2"
          >
            <i className="fas fa-plus fa-3x d-block m-auto text-black-50" />
          </div>

          {this.renderImages()}

        </Form.Group>

      </div>


    );
  }
}


export default ImageUpload;
