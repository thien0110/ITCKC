import React from 'react';
import SchoolInfoComponent from '../../components/SchoolsInformation/SchoolInfoComponent';
import {connect} from 'react-redux';
import {getSchoolInfoAction} from '../../redux/actions/SchoolInfo/SchoolInfoAction'
class SchoolInfoContainer extends React.Component {
  render() {
    return <SchoolInfoComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSchoolInfoAction: (input) => {
      dispatch(getSchoolInfoAction(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.schoolInfoReducers.data,
    isFetching: state.schoolInfoReducers.isFetching,
    message: state.schoolInfoReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolInfoContainer);
