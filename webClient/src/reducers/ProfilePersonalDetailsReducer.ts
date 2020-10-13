import { ProfilePersonalDetailsEvents } from "../events/ProfilePersonalDetailsEvents";
import { IAction } from "../actions/ProfilePersonalDetailsActions";

export interface IState {
  personalDetails: IAction["payload"]
}

const initState: IState = {
  personalDetails: {
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    github: "",
    website: "",
  }
}

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch(action.type) {
    case ProfilePersonalDetailsEvents.SET_PERSONAL_DETAILS:
      return { personalDetails: action.payload };
    default: 
      return state;
  }
}