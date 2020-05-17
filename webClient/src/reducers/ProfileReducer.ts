import { ProfileEvents } from "../events/ProfileEvents";
import { IAction } from "../actions/ProfileActions";


export interface IState {
  age: number;
  name: string;
}

const initState: IState = {
  age: 24,
  name: "",
}
export const reducer = (state: IState = initState, action: IAction): IState => {
  switch(action.type) {
    case ProfileEvents.SET_NAME:
      return { ...state, name: action.payload };
    case ProfileEvents.SET_AGE:
      return { ...state, age: action.payload };
    default: 
      return state;
  }
}