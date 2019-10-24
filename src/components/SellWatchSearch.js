import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'lodash';
import onClickOutside from 'react-onclickoutside';
import { disablePageScroll, enablePageScroll, addScrollableTarget } from 'scroll-lock';
import './scss/SellWatchSearch.scss';

// root container used for mounting this component should have .search class !!!

import { connect } from 'react-redux';
import { store } from '../config/configureStore';
import { setCollection, setWatch, setBrand } from '../actions/sellWatch';


// const URL = ""
const URL = 'https://watchj.com';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      loaded: false,
      previousValue: null,
      activeSearch: false,
      unfoldedInput: true,
      platform: null,
      requestTooShort: true,
    };

    this.html = document.querySelector('html');
    this.body = document.querySelector('body');

    this.onChangeHandlerThrottled = _.debounce(this.onChangeHandler, 300);

    this.pStyle = { color: 'gray', fontSize: '1rem' };
    this.ulStyle = { color: 'gray', fontSize: '1rem', marginTop: '20px' };
    this.pStyleRef = { color: 'lightgray', fontSize: '1rem' };

    this.getPlatform();
  }


  getPlatform() {
    const userDeviceArray = [
      { device: 'Android', platform: /Android/ },
      { device: 'iPhone', platform: /iPhone/ },
      { device: 'iPad', platform: /iPad/ },
      { device: 'Symbian', platform: /Symbian/ },
      { device: 'Windows Phone', platform: /Windows Phone/ },
      { device: 'Tablet OS', platform: /Tablet OS/ },
      { device: 'Linux', platform: /Linux/ },
      { device: 'Windows', platform: /Windows NT/ },
      { device: 'Macintosh', platform: /Macintosh/ },
    ];

    const platform = navigator.userAgent;

    for (var i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
        this.state.platform = userDeviceArray[i].device;
        return;
      }
    }
    this.state.platform = userDeviceArray[i].device;
  }


  onChangeHandler(e) {
    this.setState({
      activeSearch: true,
    });

    if (e.target.value.length > 2 && e.target.value != this.state.previousValue) {
      this.setState({
        loaded: false,
        previousValue: e.target.value,
        requestTooShort: false,

      });


      const timer = setTimeout(() => {
        if (!this.state.loaded) {
          this.setState({
            isLoading: true,
          });
        }
      }, 1000);

      // localStorage.setItem("searchInputValue",e.target.value);

      fetch(`${URL}/search/autocomplete/?q=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            searchSuggestion: data,
            isLoading: false,
            loaded: true,
            err: null,
          });

          clearTimeout(timer);
        })
        .catch((err) => {
          this.setState({
            searchSuggestion: data,
            isLoading: false,
            loaded: true,
            err,
          });
        });
    } else if (e.target.value.length < 3) {
      this.setState({
        searchSuggestion: {},
        previousValue: e.target.value,
        requestTooShort: true,
      });
    }
  }


  inputOnFocusHandler(e) {
    // window.matchMedia('(max-width: 992px)').matches ||
    // document.querySelectorAll('.main-header__tool-bar__nav-bar .nav-item:not(.image)')
    //   .forEach((elem) => elem.style.display = 'none');


    this.setState({
      unfoldedInput: true,
    });


    if (e.nativeEvent.target.value != '') {
      this.setState({
        activeSearch: true,
      });
    }


    if (this.state.platform == 'iPhone') {
      addScrollableTarget(this.searchQuickResult);
      // disablePageScroll(this.body);
      // disablePageScroll(this.html);

      this.searchQuickResult.style.height = `${window.innerHeight}px`;
      this.searchQuickResult.style.paddingBottom = '55px';
    }
    // scrollTo(0, 1);
  }


  inputOnBlurHandler(e) {
    // this.setState({
    //   ...this.state,
    //   activeSearch : false,
    // });

    (window.matchMedia('(max-width: 1024px)').matches && this.state.platform == 'iPhone')
      ? setTimeout(() => { this.searchQuickResult.style.maxHeight = `${String(Number(window.innerHeight) - 81)}px`; }, 100)
      : null;


    // document.querySelectorAll(".main-header__tool-bar__nav-bar .nav-item:not(.image)").forEach((elem)=>elem.style.display="");
    this.setState({
      activeSearch: false,
      unfoldedInput: false,
    });
  }

  /**
   * this method is used by onClickOutside wrapper
   */
  handleClickOutside(e) {
    // document.querySelectorAll(".main-header__nav-bar .nav-item:not(.image)").forEach((elem)=>elem.style.display="");
    this.setState({
      activeSearch: false,
      // unfoldedInput: false,
    });
  }


  componentDidMount() {
    console.log('Search mounted');

    this.searchQuickResult = ReactDOM.findDOMNode(this).querySelector('.search__quick-result');
  }

  componentWillUnmount() {
    // enablePageScroll(this.body);
    // enablePageScroll(this.html);
  }


  componentDidUpdate() {


    // let defaultValue = "";
    // if (this.props.value == "brand"){
    //   defaultValue = this.props.state.brand;
    // } else if (this.props.value == "collection") {
    //   defaultValue = this.props.state.collection;
    // } else if (this.props.value == "watchName") {
    //   defaultValue = this.props.state.watchName;
    // } else {
    //   defaultValue = "";
    // };
    // ReactDOM.findDOMNode(this).querySelector("input").value=defaultValue;

  }


  renderBrands(list, listName) {
    return list.map((elem, id) => (
      <a
        href={/* document.URL */URL + elem.url}
        key={listName + id}
        onClick={(e) => {
          e.preventDefault();
          console.log(elem);
          store.dispatch(setWatch({
            brand: elem.name,
            collection: '',
            watchName: '',
            reference: '',
          }));
          ReactDOM.findDOMNode(this).querySelector('input').value = '';
        }}
      >
        <li>
          <div className="first_row_cell">
            <img
              src={elem.thumbnail}
              className="img-fit-contain"
              alt="Thumbnail"
            />
          </div>
          <div className="last_row_cell">
            <p>
              {elem.name}
            </p>
            <p style={this.pStyleRef}>
              {elem.offers_count ? `Offers: ${elem.offers_count}` : null}
            </p>
          </div>
        </li>
      </a>
    ));
  }


  renderCollections(list, listName) {
    return list.map((elem, id) => (
      <a
        href={/* document.URL */URL + elem.marketplace_url}
        key={listName + id}
        onClick={(e) => {
          e.preventDefault();
          console.log(elem);
          store.dispatch(setWatch({
            brand: elem.brand_name,
            collection: elem.name,
            watchName: '',
            reference: '',
          }));
          ReactDOM.findDOMNode(this).querySelector('input').value = '';
        }}
      >
        <li>
          <div>
            <div className="first_row_cell">
              <img
                src={elem.thumbnail}
                className="img-fit-contain"
                alt="Thumbnail"
              />
            </div>
            <div className="last_row_cell">
              <p style={this.pStyleRef}>
                {elem.brand_name}
              </p>
              <p>
                {elem.name}
              </p>
              <p style={this.pStyleRef}>
                {elem.offers_count ? `Offers: ${elem.offers_count}` : null}
              </p>
            </div>
          </div>
        </li>
      </a>
    ));
  }


  renderOffers(list, listName) {
    return list.map((elem, id) => (
      <a
        href={/* document.URL */URL + elem.url}
        key={listName + id}
      >
        <li>
          <div className="first_row_cell">
            <img
              src={URL + elem.thumbnail}
              className="img-fit-contain"
              alt="Thumbnail"
            />
          </div>
          <div className="last_row_cell">
            <p style={this.pStyleRef}>
              {elem.watch_brand_name}
            </p>
            <p>
              {elem.watch_name}
            </p>
            <p style={this.pStyle}>
              {
                elem.price_usd
                  ? `${elem.price_usd} USD`
                  : 'Price on application'
              }
            </p>
            <p style={this.pStyleRef}>
              Ref:
              {' '}
              {elem.watch_reference}
            </p>
          </div>
        </li>
      </a>
    ));
  }


  renderWatches(list, listName) {
    return list.map((elem, id) => (
      <a
        href={/* document.URL */URL + elem.url}
        key={listName + id}
        onClick={(e) => {
          e.preventDefault();
          // console.log(elem);
          store.dispatch(setWatch({
            brand: elem.brand_name,
            collection: elem.collection_name,
            watchName: elem.name,
            reference: elem.reference,
          }));
          ReactDOM.findDOMNode(this).querySelector('input').value = '';
        }}
      >
        <li>
          <div className="first_row_cell">
            <img
              src={elem.thumbnail}
              className="img-fit-contain"
              alt="Thumbnail"
            />
          </div>
          <div className="last_row_cell">
            <p style={this.pStyleRef}>
              {elem.brand_name}
            </p>
            <p>
              {elem.name}
            </p>
            <p style={this.pStyle}>
              {`Collection: ${elem.collection_name}`}
            </p>
            <p style={this.pStyleRef}>
              {`Ref: ${elem.reference}`}
            </p>

          </div>
        </li>
      </a>
    ));
  }


  render() {
    let brands = null;
    let collections = null;
    // let offers = null;
    let watches = null;
    let noResultsRender = null;
    let activeQuickResultClass = '';
    let activeInputClass = '';
    const dMdNone = this.state.activeSearch || this.state.unfoldedInput ? '' : ' d-md-none';


    if (this.state.searchSuggestion) {
      if (Array.isArray(this.state.searchSuggestion.brands)
        && this.state.searchSuggestion.brands.length !== 0) {
        brands = (
          <>
            <h6>
              Brands
            </h6>
            <ul>
              {this.renderBrands(this.state.searchSuggestion.brands, 'brands')}
            </ul>
          </>
        );
      }


      if (Array.isArray(this.state.searchSuggestion.collections)
        && this.state.searchSuggestion.collections.length !== 0) {
        collections = (
          <>
            <h6>
              Collections
            </h6>
            <ul>
              {this.renderCollections(this.state.searchSuggestion.collections, 'collections')}
            </ul>
          </>
        );
      }


      // if (Array.isArray(this.state.searchSuggestion.offers)
      //   && this.state.searchSuggestion.offers.length !== 0) {
      //   offers = (
      //     <>
      //       <h6>
      //         Marketplace
      //       </h6>
      //       <ul>
      //         {this.renderOffers(this.state.searchSuggestion.offers, 'offers')}
      //       </ul>
      //     </>
      //   );
      // }


      if (Array.isArray(this.state.searchSuggestion.watches)
        && this.state.searchSuggestion.watches.length != 0) {
        watches = (
          <>
            <h6>
              Watches in encyclopedia
            </h6>
            <ul>
              {this.renderWatches(this.state.searchSuggestion.watches, 'watches')}
            </ul>
          </>
        );
      }
    }


    const noResults = (this.props.brand && !brands)
      || (this.props.collection && !collections)
      || (this.props.reference && !watches);

    // let noResults = (!brands && !collections && !offers && !watches);


    if (noResults && !this.state.isLoading) {
      // this.state.previousValue != "" prevents showing "No results" during first AJAX reply waiting
      noResultsRender = !this.state.requestTooShort
        ? (
          <>
            <ul style={this.ulStyle}>
              <li>
              No results
              </li>
            </ul>
          </>
        )
        : (
          <>
            <ul style={this.ulStyle}>
              <li>
              Type at least 3 symbols
              </li>
            </ul>
          </>
        );
    }

    if (this.state.activeSearch) {
      activeQuickResultClass = ' search__quick-result--active';
      activeInputClass = ' search__input--active';
    }

    if (this.state.unfoldedInput) {
      activeInputClass = ' search__input--active';
    }

    let defaultValue = '';
    if (this.props.value == 'brand') {
      defaultValue = this.props.state.brand;
    } else if (this.props.value == 'collection') {
      defaultValue = this.props.state.collection;
    } else if (this.props.value == 'watchName') {
      defaultValue = this.props.state.watchName;
    } else {
      defaultValue = '';
    }


    return (
      <div className={`d-flex flex-grow-1 position-relative align-items-center${activeInputClass}`}>


        <div className={`d-flex flex-grow-1 position-relative align-items-center search-bar p-0${activeInputClass}`}>

          <div
            className="d-flex d-inline-block  m-1 pl-1 pr-1 pt-0 pb-0 bg-light"
            style={{
              whiteSpace: 'nowrap',
              border: defaultValue !== '' ? 'solid 1px gray' : 'none',
              borderRadius: 5,
            }}
          >
            {defaultValue}
            {defaultValue != '' ? (
              <i
                className="fa fa-times m-auto pl-2 text-black-50"
                onClick={() => {
                  store.dispatch(setWatch({
                    brand: this.props.brand ? '' : this.props.state.brand,
                    collection: this.props.collection ? '' : this.props.state.collection,
                    watchName: this.props.reference ? '' : this.props.state.watchName,
                    reference: this.props.reference ? '' : this.props.state.watchName,
                  }));
                }}
              />
            ) : null }
          </div>

          <input
            className={`d-flex position-relative rounded-0 search-bar_input${activeInputClass}${activeQuickResultClass}${dMdNone}`}
            type="text"
            minLength="3"
            onChange={(e) => this.onChangeHandlerThrottled(e.nativeEvent)}
            onFocus={(e) => { this.inputOnFocusHandler(e); }}
            onBlur={() => {}}
            style={this.props.nounderline ? { border: 'none', height: '41px' } : {}}
          />


        </div>

        <div className={`col-12 search__quick-result position-absolute${activeQuickResultClass}`}>
          { this.state.isLoading
            ? 'Loading...'
            : null }

          <div className="search__quick-result__results">
            {this.props.brand ? brands : null}
            {this.props.collection ? collections : null}
            {this.props.reference ? watches : null}
            {noResultsRender}
          </div>

        </div>
      </div>
    );
  }
}


const mapStateToProp = (state) => ({
  state: state.SellWatch,
});


export default connect(mapStateToProp)(onClickOutside(Search));

// export default onClickOutside(Search);
