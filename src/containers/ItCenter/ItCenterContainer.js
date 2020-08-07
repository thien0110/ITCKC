import React from 'react';
import ItCenterComponent from '../../components/ItCenter/ItCenterComponent';
import {connect} from 'react-redux';
import {getItCenterInfoAction} from '../../redux/actions/ItCenter/ItCenterAction';
class ItCenterContainer extends React.Component {
  render() {
    return <ItCenterComponent {...this.props} />;
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
)(ItCenterContainer);
