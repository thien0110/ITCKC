import React from 'react';
import ProfileComponent from '../../components/Profile/ProfileComponent';
import {connect} from 'react-redux';
import {
  formatData,getProfileAction
} from '../../redux/actions/MenuProfile/ProfileAction';
class ProfileContainer extends React.Component {
  render() {
    return <ProfileComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileAction: (input) => {
      dispatch(getProfileAction(input));
    },
    formatData: (input) => {
      dispatch(formatData(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.profileReducers.data,
    isFetching: state.profileReducers.isFetching,
    message: state.profileReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
