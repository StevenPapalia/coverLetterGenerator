import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as profilePersonalDetailsReducer } from './reducers/ProfilePersonalDetailsReducer'
import { reducer as profilePictureReducer } from './reducers/ProfilePictureReducer'
import { reducer as DND_ListReducer } from './reducers/DND_ListReducer'

const reducers = combineReducers({
  profilePersonalDetails: profilePersonalDetailsReducer,
  profilePicture: profilePictureReducer,
  profileDndList: DND_ListReducer,
})

export type IStoreState = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunk))
