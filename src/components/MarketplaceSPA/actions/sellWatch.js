export const SET_BRAND = 'SET_BRAND';
export const SET_COLLECTION = 'SET_COLLECTION';
export const SET_WATCH = 'SET_WATCH';
export const SET_WATCH_PHOTOS = 'SET_WATCH_PHOTOS';
export const SET_WATCH_FORM_DATA = 'SET_WATCH_FORM_DATA';


export const setBrand = (data) => ({
  type: SET_BRAND,
  data,
});

export const setCollection = (data) => ({
  type: SET_COLLECTION,
  data,
});

export const setWatch = (data) => ({
  type: SET_WATCH,
  data,
});

export const setWatchPhotos = (data) => ({
  type: SET_WATCH_PHOTOS,
  data,
});

export const setWatchFormData = (data) => ({
  type: SET_WATCH_FORM_DATA,
  data,
});
