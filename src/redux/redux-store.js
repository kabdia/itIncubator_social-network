import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))
  );



window.__store__ = store;
export default store;