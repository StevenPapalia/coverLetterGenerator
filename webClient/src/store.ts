import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducer as appReducer } from "./reducers/AppReducer";
import { reducer as topTabBarReducer } from "./reducers/TopTabBarReducer";
import { reducer as profileReducer } from "./reducers/ProfileReducer";
import { reducer as profilePictureReducer } from "./reducers/ProfilePictureReducer";

const reducers = combineReducers({
  app: appReducer,
  tobTabBar: topTabBarReducer,
  profile: profileReducer,
  profilePicture: profilePictureReducer,
});

export type IStoreState = ReturnType<typeof reducers>

export const store =  createStore(reducers, applyMiddleware(thunk));
