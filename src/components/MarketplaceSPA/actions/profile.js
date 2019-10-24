export const SET_OFFICE_PHOTOS = 'SET_OFFICE_PHOTOS';
export const SET_FORM_DATA = 'SET_FORM_DATA';


export const setOfficePhotos = (data) => ({
  type: SET_OFFICE_PHOTOS,
  data,
});

export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  data,
});
