import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth.reducer";
import reposReducer from "./repos";

const rootReducer = combineReducers({
  auth: authReducer,
  repos: reposReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
