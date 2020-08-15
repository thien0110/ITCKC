import React from 'react';
import AlumniComponent from '../components/Alumni/AlumniComponent';
import {connect} from 'react-redux';
import {getItCenterInfoAction} from '../redux/actions/ItCenter/ItCenterAction';
class AlumniContainer extends React.Component {
  render() {
    return <AlumniComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItCenterInfoAction: input => {
      dispatch(getItCenterInfoAction(input));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.itCenterReducers.data,
    isFetching: state.itCenterReducers.isFetching,
    message: state.itCenterReducers.message,
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlumniContainer);
