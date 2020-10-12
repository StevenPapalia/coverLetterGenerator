import { ProfilePersonalDetailsEvents } from "../events/ProfilePersonalDetailsEvents";
import { IAction } from "../actions/ProfilePersonalDetailsActions";


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
    case ProfilePersonalDetailsEvents.SET_NAME:
      return { ...state, name: action.payload };
    case ProfilePersonalDetailsEvents.SET_AGE:
      return { ...state, age: action.payload };
    default: 
      return state;
  }
}