import { connect } from 'react-redux';
import { actionCreators } from '../actions/nationalDataActions';

const mapStateToProps = (state) => {
  return { nationalData: state.nationalData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNationalData: (nationalData) => {
       dispatch(actionCreators.getNationalData(nationalData));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
