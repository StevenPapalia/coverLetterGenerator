import { TopNavBar as Component } from "../components/TopNavBar";
import { compose } from "redux";
import { connect } from "react-redux";
import { IStoreState } from "../store";

const mapStateToProps = (state: IStoreState) => {
  return {};
};

export const TopNavBar = compose(connect(mapStateToProps, {}))(Component);
