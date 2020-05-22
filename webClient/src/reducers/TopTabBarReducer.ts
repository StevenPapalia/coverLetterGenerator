import { TopTabBarEvents } from "../events/TopTabBarEvents";
import { IAction } from "../actions/TopTabBarActions";


export interface IState { currentPage: number; }

const initState: IState = { currentPage: 0 }

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch(action.type) {
    case TopTabBarEvents.SET_PAGE:
      return { ...state, currentPage: action.payload };
    default: 
      return state;
  }
}