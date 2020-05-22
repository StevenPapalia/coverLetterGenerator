import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducer as profileReducer } from "./reducers/ProfileReducer";
import { reducer as topTabBarReducer } from "./reducers/TopTabBarReducer";
import { reducer as appReducer } from "./reducers/AppReducer";

const reducers = combineReducers({
  profile: profileReducer,
  tobTabBar: topTabBarReducer,
  app: appReducer,
});

export type IStoreState = ReturnType<typeof reducers>

export const store =  createStore(reducers, applyMiddleware(thunk));
