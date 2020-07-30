import React from 'react';
import SearchComponent from '../components/SearchComponent';
import {connect} from 'react-redux';
import {searchAction, formatData} from '../redux/actions/SearchAction';
class SearchContainer extends React.Component {
  render() {
    return <SearchComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchAction: input => {
      dispatch(searchAction(input));
    },
    formatData: () => {
      dispatch(formatData());
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.searchReducers.data,
    isFetching: state.searchReducers.isFetching,
    message: state.searchReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContainer);
