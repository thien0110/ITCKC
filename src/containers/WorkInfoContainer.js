import React from 'react';
import WorkInfoComponent from '../components/WorkInfo/WorkInfoComponent';
import {connect} from 'react-redux';
import {getItCenterInfoAction} from '../redux/actions/ItCenter/ItCenterAction';
class WorkInfoContainer extends React.Component {
  render() {
    return <WorkInfoComponent {...this.props} />;
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
)(WorkInfoContainer);
