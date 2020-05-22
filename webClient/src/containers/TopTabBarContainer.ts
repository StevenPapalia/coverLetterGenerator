import { TopTabBar as Component } from '../components/TopTabBar';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IAction, SetPage } from '../actions/TopTabBarActions';
import { IStoreState } from '../store';

const mapStateToProps = (state: IStoreState) => {
  return { currentPage: state.tobTabBar.currentPage };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return { SetPage: (page: number) => dispatch(SetPage(page)) };
};

export const TopTabBar = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);