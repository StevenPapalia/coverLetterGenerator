import { ProfilePersonalDetailsMemo as Component } from "../components/App/Profile/ProfilePersonalDetails/ProfilePersonalDetails";
import { compose } from "redux";
import { connect } from "react-redux";
import { Dispatch } from "react";
import {
  IAction,
  SetPersonalDetails,
} from "../actions/ProfilePersonalDetailsActions";
import { IStoreState } from "../store";

const mapStateToProps = (state: IStoreState) => {
  return {
    personalDetails: state.profilePersonalDetails.personalDetails,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    setPersonalDetails: (personalDetails: IAction["payload"]) =>
      dispatch(SetPersonalDetails(personalDetails)),
  };
};

export const ProfilePersonalDetails = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
