import { Profile as Component } from '../components/Profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IAction, SetAge, SetName } from '../actions/ProfileActions';
import { IStoreState } from '../store';

const mapStateToProps = (state: IStoreState) => {
  return {
    age: state.profile.age,
    name: state.profile.name,
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

const Profile = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);

export default Profile;