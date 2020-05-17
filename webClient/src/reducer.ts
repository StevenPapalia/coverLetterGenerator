import { AppEvents } from "./events";
import { IAction } from "./actions";


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
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };
    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };
    default: 
      return state;
  }
}