import React from 'react';
import DepartmentInfoComponent from '../../components/DepartmentInfo/DepartmentInfoComponent';
import {connect} from 'react-redux';
import {getDepartmentInfoAction} from '../../redux/actions/DepartmentInfo/DepartmentInfoAction'
class DepartmentInfoContainer extends React.Component {
  render() {
    
    return <DepartmentInfoComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDepartmentInfoAction: (input) => {
      dispatch(getDepartmentInfoAction(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.departmentInfoReducers.data,
    isFetching: state.departmentInfoReducers.isFetching,
    message: state.departmentInfoReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DepartmentInfoContainer);
