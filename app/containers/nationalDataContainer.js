import { connect } from 'react-redux';
import { actionCreators } from '../actions/nationalDataActions';
// import stations from '../reducers/nationalDataReducer';

const mapStateToProps = (state) => {
  return { stations: state.nationalData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNationalData: (nationalData) => {
       dispatch(actionCreators.getNationalData(nationalData));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
