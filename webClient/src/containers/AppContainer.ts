import { App as Component } from '../components/App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IStoreState } from '../store';

const mapStateToProps = (state: IStoreState) => {
  return {
    currentPage: state.tobTabBar.currentPage,
  };
};

export const App = compose(
  connect(
    mapStateToProps,
    {}
  )
)(Component);