import { ProfilePictureMemo as Component } from "../components/ProfilePicture/ProfilePicture"
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IAction, UploadImage } from '../actions/ProfilePictureActions';
import { IStoreState } from '../store';

const mapStateToProps = (state: IStoreState) => {
  return {
    profilePicture: state.profilePicture.imgUrl,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    uploadImage: (char: string) => {
      dispatch(UploadImage(char));
    },
  };
};

export const ProfilePicture = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);