import { App as Component } from './App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IAction, SetAge, SetName } from './actions';
import { IAppState } from './store';

const mapStateToProps = (state: IAppState) => {
  return {
    age: state.app.age,
    name: state.app.name,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onAgeButtonClick: () => dispatch(SetAge(Math.floor(Math.random() * 100))),
    changeName: (char: string) => {
      console.log(char);
      dispatch(SetName(char));
    },
  };
};

export const App = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);