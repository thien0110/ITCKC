import React from 'react';
import EditProfileComponent from '../../components/Profile/EditProfileComponent';
import {connect} from 'react-redux';
import {
  editProfileAction,
  formatData,
} from '../../redux/actions/MenuProfile/ProfileAction';
class EditProfileContainer extends React.Component {
  render() {
    return <EditProfileComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProfileAction: (input) => {
      dispatch(editProfileAction(input));
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
)(EditProfileContainer);
