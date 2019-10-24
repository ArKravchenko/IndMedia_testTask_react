import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Link, Switch, Redirect,
} from 'react-router-dom';

import { Form, Button, InputGroup } from 'react-bootstrap';

import { connect } from 'react-redux';

import Search from './SellWatchSearch';
import ImageUpload from './ImageUpload';

import { store } from '../config/configureStore';
import { setWatchPhotos, setWatchFormData } from '../actions/sellWatch';


class SellWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      condition: this.props.state.condition,
      currency: this.props.state.currency,
      price: this.props.state.price,
      boxIncluded: this.props.state.boxIncluded,
      papersIncluded: this.props.state.papersIncluded,
      yearInPapers: '2014',
      additionalItems: '',
      description: this.props.state.description,

    };
  }


  componentDidMount() {

    //
    // console.log("");
    // console.log("");
    // console.log("");
    // store.dispatch(setMyOffers("data set by SellWatch component"));
    // console.log("Store updated by SellWatch component logged by SellWatch component");
    // console.log(store.getState());

  }


  componentDidUpdate() {
    // this.setState({
    //   brand: store.getState().SellWatch.brand,
    //   collection: store.getState().SellWatch.collection,
    //   reference: store.getState().SellWatch.reference,
    //   watchName: store.getState().SellWatch.watchName,
    // })

    // console.log(store.getState())
  }


  handleClick() {
    alert('Clicked');
  }


  renderCurrencies() {
    return (
      <>
        <option value="AUD">Australian dollar</option>

        <option value="BRL">Brazilian real</option>

        <option value="GBP">British pound</option>

        <option value="CAD">Canadian dollar</option>

        <option value="CLP">Chilean peso</option>

        <option value="CNY">Chinese yuan</option>

        <option value="HRK">Croatian kuna</option>

        <option value="CZK">Czech koruna</option>

        <option value="DKK">Danish krone</option>

        <option value="EUR">Euro</option>

        <option value="HKD">Hong Kong Dollar</option>

        <option value="HUF">Hungarian forint</option>

        <option value="INR">Indian rupee</option>

        <option value="IDR">Indonesian rupiah</option>

        <option value="JPY">Japanese yen</option>

        <option value="MYR">Malaysian ringgit</option>

        <option value="MXN">Mexican peso</option>

        <option value="TWD">New Taiwan dollar</option>

        <option value="NZD">New Zealand dollar</option>

        <option value="NOK">Norwegian krone</option>

        <option value="PHP">Philippine peso</option>

        <option value="PLN">Polish zloty</option>

        <option value="RON">Romanian leu</option>

        <option value="RUB">Russian ruble</option>

        <option value="SGD">Singapore dollar</option>

        <option value="ZAR">South African rand</option>

        <option value="KRW">South Korean won</option>

        <option value="SEK">Swedish krona</option>

        <option value="CHF">Swiss franc</option>

        <option value="THB">Thai baht</option>

        <option value="TRY">Turkish lira</option>

        <option value="AED">United Arab Emirates dirham</option>

        <option value="USD">United States dollar</option>
      </>
    );
  }


  render() {
    return (

      <>
        <div className="container sell-watch-form mt-3 mb-3">
          <Form>

            <h4>Create offer </h4>

            <Form.Group className="d-block search m-0 p-0 my-3" style={{}}>
              <Form.Label>
                Brand name
                <span className="text-orange">*</span>
              </Form.Label>
              <Search brand value="brand" />
            </Form.Group>


            <Form.Group className="d-block search m-0 p-0 my-3" style={{}}>
              <Form.Label>
                Collection
                <span className="text-orange">*</span>
              </Form.Label>
              <Search collection value="collection" />
            </Form.Group>

            <Form.Group className="d-block search m-0 p-0 my-3" style={{}}>
              <Form.Label>
                Reference
                <span className="text-orange">*</span>
              </Form.Label>
              <Search reference value="watchName" />
            </Form.Group>


            <Form.Group>
              <Form.Label>
                Condition
                <span className="text-orange">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                className=" col-xs-12 col-sm-6 col-md-4 border border-orange "
                required
                value={this.props.state.condition}
                onChange={(e) => {
                  this.setState({
                    condition: e.target.value,
                  },
                  () => {
                    // console.log(this.state);
                    store.dispatch(setWatchFormData({ condition: this.state.condition }));
                    // console.log(store.getState());
                  });
                }}
              >
                {/* {this.renderCountry()} */}
                <option value="0">Not specified</option>

                <option value="1">Scrap</option>

                <option value="6">Mint</option>

                <option value="5">Fine</option>

                <option value="4">Fair</option>

                <option value="2">Poor</option>

              </Form.Control>
            </Form.Group>


            <Form.Group className="col-12 col-md-8 col-lg-6 p-0" controlId="companyOwnerPhone">
              <Form.Label>Price </Form.Label>
              <InputGroup className="border  " style={{ borderRadius: '5px' }}>

                <Form.Control
                  className=""
                  required
                  value={this.props.state.price}
                  disabled={this.props.state.price == 'upon request'}
                  onChange={(e) => {
                    this.setState({
                      price: e.target.value,
                    },
                    () => {
                      store.dispatch(setWatchFormData({ price: this.state.price }));
                      // console.log(store.getState());
                    });
                  }}
                />
                <InputGroup.Append>
                  <Form.Control
                    as="select"
                    className=" border-0"
                    defaultValue={this.props.state.currency != '' ? this.props.state.currency : 'USD'}
                    required
                    disabled={this.props.state.price == 'upon request'}
                    onChange={(e) => {
                      this.setState({
                        currency: e.target.value,
                      },
                      () => {
                        store.dispatch(setWatchFormData({ currency: this.state.currency }));
                        // console.log(store.getState());
                      });
                    }}
                  >

                    {this.renderCurrencies()}


                  </Form.Control>
                </InputGroup.Append>
              </InputGroup>

              <div className="custom-control custom-switch mb-4">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="priceSwitch"
                  onChange={(e) => {
                    // console.log(e.target.checked);
                    const selects = [...e.target.parentNode.previousSibling.querySelectorAll('input'), ...e.target.parentNode.previousSibling.querySelectorAll('select')];
                    selects.forEach((elem) => {
                      elem.disabled = !elem.disabled;
                      // if (this.state.monday.from!="day off"|| this.state.monday.to!="day off")
                      if (e.target.checked) {
                        this.setState({ price: 'upon request' },
                          () => {
                            store.dispatch(setWatchFormData({ price: this.state.price }));
                            // console.log(store.getState());
                          });
                      } else {
                        this.setState({ price: '' },
                          () => {
                            store.dispatch(setWatchFormData({ price: this.state.price }));
                            // console.log(store.getState());
                          });
                      }
                    });
                  }}
                  checked={this.props.state.price == 'upon request'}
                />
                <label className="custom-control-label" htmlFor="priceSwitch">Price upon request</label>
              </div>
            </Form.Group>


            <p>Description </p>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                value={this.props.state.description}
                onChange={(e) => {
                  this.setState({
                    description: e.target.value,
                  }, () => {
                    store.dispatch(setWatchFormData({ description: this.state.description }));
                    // console.log(store.getState());
                  });
                }}
              />
            </InputGroup>

            <div className="custom-control custom-checkbox mb-4">
              <input
                type="checkbox"
                className="custom-control-input"
                id="boxIncluded"
                checked={this.props.state.boxIncluded}
                onChange={(e) => {
                  this.setState({
                    boxIncluded: !this.state.boxIncluded,
                  }, () => {
                    store.dispatch(setWatchFormData({ boxIncluded: this.state.boxIncluded }));
                    // console.log(store.getState());
                  });
                }}

              />
              <label className="custom-control-label" htmlFor="boxIncluded">Box included</label>
            </div>

            <div className="custom-control custom-checkbox mb-4">
              <input
                type="checkbox"
                className="custom-control-input"
                id="papersIncluded"
                checked={this.props.state.papersIncluded}
                onChange={(e) => {
                  const input = ReactDOM.findDOMNode(this).querySelector("input[type='number']");
                  input.disabled = this.props.state.papersIncluded;

                  this.setState({
                    papersIncluded: !this.state.papersIncluded,
                    // yearInPapers:!this.state.papersIncluded? "2014":""
                  }, () => {
                    store.dispatch(setWatchFormData({ papersIncluded: this.state.papersIncluded }));
                    // console.log(store.getState());
                  });
                }}

              />
              <label className="custom-control-label" htmlFor="papersIncluded">Papers included</label>
            </div>

            <Form.Group>
              <Form.Label>Year in papers</Form.Label>
              <Form.Control
                type="number"
                className=" col-xs-6 col-sm-4 col-md-2 border  "
                required
                value={this.props.state.yearInPapers}
                disabled={!this.props.state.papersIncluded}
                onChange={(e) => {
                  this.setState({
                    yearInPapers: e.target.value,
                  },
                  () => {
                    store.dispatch(setWatchFormData({ yearInPapers: this.state.yearInPapers }));
                    // console.log(store.getState());
                  });
                }}
              />
            </Form.Group>

            <p>Additional included items </p>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                value={this.props.state.additionalItems}
                onChange={(e) => {
                  this.setState({
                    additionalItems: e.target.value,
                  }, () => {
                    store.dispatch(setWatchFormData({
                      additionalItems: this.state.additionalItems,
                    }));
                    // console.log(store.getState());
                  });
                }}
              />
            </InputGroup>


          </Form>


          <h4 className="mb-3">Photos</h4>


          <ImageUpload
            inputId="watchPhotosSubmit"
            files={this.props.state.watchPhotos}
            actionSet={(data) => setWatchPhotos(data)}
          />


          <Button
            variant="primary"
            onClick={() => {
              console.log(this.props.state);
            }}
            // type="submit"


          >
            Submit
          </Button>


        </div>

      </>


    );
  }
}

const mapStateToProp = (state) => ({
  state: state.SellWatch,

});

export default connect(mapStateToProp)(SellWatch);
