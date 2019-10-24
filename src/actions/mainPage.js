
export const SET_AUTHORS = 'SET_AUTHORS';
export const SET_ARTICLES = 'SET_ARTICLES';

export const SET_ARTICLES_STATUS = 'SET_ARTICLES_STATUS';
export const SET_AUTHORS_STATUS = 'SET_ARTICLES_STATUS';

export const SET_AUTHORS_FAIL = 'SET_AUTHORS_FAIL';
export const SET_ARTICLES_FAIL = 'SET_ARTICLES_FAIL';

export const setAuthors = (data) => ({
  type: SET_AUTHORS,
  data,
});

export const setArticles = (data) => ({
  type: SET_ARTICLES,
  data,
});

export const setArticlesStatus = (data) => ({
  type: SET_ARTICLES_STATUS,
  data,
});

export const setAuthorsStatus = (data) => ({
  type: SET_AUTHORS_STATUS,
  data,
});

export const setAuthorsFail = (data) => ({
  type: SET_AUTHORS_FAIL,
  data,
});

export const setArticlesFail = (data) => ({
  type: SET_ARTICLES_FAIL,
  data,
});
