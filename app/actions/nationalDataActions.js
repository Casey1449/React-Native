import { types } from './actionTypes';

export const actionCreators = {
  getNationalData: (data) => {
    return {type: types.GET_NATIONAL_DATA, data};
  }
};
