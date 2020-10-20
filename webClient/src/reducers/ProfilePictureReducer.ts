import { ProfilePictureEvents } from "../events/ProfilePictureEvents";
import { IAction } from "../actions/ProfilePictureActions";

export interface IState {
  imgUrl: string;
}

const initState: IState = {
  imgUrl: "",
};

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch (action.type) {
    case ProfilePictureEvents.EDIT_PROFILE_PICTURE:
      return {
        ...state,
        imgUrl: action.payload,
      };
    default:
      return state;
  }
};
