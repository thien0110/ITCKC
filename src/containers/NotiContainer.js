import React from 'react';
import NotiComponent from '../components/NotiComponent';
import {connect} from 'react-redux';
import {getItCenterInfoAction} from '../redux/actions/ItCenter/ItCenterAction';
class NotiContainer extends React.Component {
  render() {
    return <NotiComponent {...this.props} />;
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
)(NotiContainer);
