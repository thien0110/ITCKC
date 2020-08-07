import React from 'react';
import ScoreTableComponent from '../../components/Profile/ScoreTableComponent';
import {connect} from 'react-redux';
import {
  formatData,getScoreTableAction
} from '../../redux/actions/MenuProfile/ScoreTableAction';
class ScoreTableContainer extends React.Component {
  render() {
    return <ScoreTableComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScoreTableAction: (input) => {
      dispatch(getScoreTableAction(input));
    },
    formatData: (input) => {
      dispatch(formatData(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.scoreTableReducers.data,
    isFetching: state.scoreTableReducers.isFetching,
    message: state.scoreTableReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreTableContainer);
