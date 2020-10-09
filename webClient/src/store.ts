import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { reducer as profileReducer } from "./reducers/ProfileReducer";
import { reducer as profilePictureReducer } from "./reducers/ProfilePictureReducer";

const reducers = combineReducers({
  profile: profileReducer,
  profilePicture: profilePictureReducer,
});

export type IStoreState = ReturnType<typeof reducers>

export const store =  createStore(reducers, applyMiddleware(thunk));
