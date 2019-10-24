import {
  SET_AUTHORS,
  SET_ARTICLES,
  SET_AUTHORS_STATUS,
  SET_ARTICLES_STATUS,
  SET_AUTHORS_FAIL,
  SET_ARTICLES_FAIL,
  SET_READ_ARTICLE,
} from '../actions/mainPage.js'

const INITIAL_STATE = {
  authorsLoading: false,
  authorsLoadFail: false,
  authors: [],
  articlesLoading: false,
  articlesLoadFail: false,
  articles: [],
  readArticles:[],
}


export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTHORS:
      return Object.assign(
        {},
        state,
        {
          authors: action.data,
        },
      );
    case SET_ARTICLES:
      return Object.assign(
        {},
        state,
        {
          articles: action.data,
        },
      );
    case SET_AUTHORS_STATUS:
      return Object.assign(
        {},
        state,
        {
          authorsLoading: action.data,
        },
      );
    case SET_ARTICLES_STATUS:
      return Object.assign(
        {},
        state,
        {
          articlesLoading: action.data,
        },
      );
    case SET_AUTHORS_FAIL:
      return Object.assign(
        {},
        state,
        {
          authorsLoadFail: action.data,
        },
      );
    case SET_ARTICLES_FAIL:
      return Object.assign(
        {},
        state,
        {
          articlesLoadFail: action.data,
        },
      );
    case SET_READ_ARTICLE:
      let list;
      if (state.readArticles.indexOf(action.data)!=-1) {
         list = [...state.readArticles];
      } else {
          list = [...state.readArticles, action.data];
      }
      return Object.assign(
        {},
        state,
        {
          readArticles: list,
        },
      );

    default:
      return state;
  }
}
