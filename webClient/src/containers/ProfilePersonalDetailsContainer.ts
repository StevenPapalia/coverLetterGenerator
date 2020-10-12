import { ProfilePersonalDetailsMemo as Component } from '../components/App/Profile/ProfilePersonalDetails/ProfilePersonalDetails';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IAction, SetAge, SetName } from '../actions/ProfilePersonalDetailsActions';
import { IStoreState } from '../store';

const mapStateToProps = (state: IStoreState) => {
  return {
    age: state.profilePersonalDetails.age,
    name: state.profilePersonalDetails.name,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    onAgeButtonClick: () => dispatch(SetAge(Math.floor(Math.random() * 100))),
    changeName: (char: string) => {
      dispatch(SetName(char));
    },
  };
};

export const ProfilePersonalDetails = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);