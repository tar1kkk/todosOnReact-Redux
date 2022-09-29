import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const initialState = {};
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunc(applyMiddleware(thunk));

const store = createStore(rootReducer(), initialState, composeEnhancers);

export default store;