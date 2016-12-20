import * as types from '../actions/actionTypes';

const initialState = [];

const nationalData = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_NATIONAL_DATA':
      return data;
  }
  return state;
};

export default nationalData;
