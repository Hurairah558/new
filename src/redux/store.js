import { createStore , applyMiddleware } from "redux";
import reducers from "./reducers/root";


const logger = store => {
  return next => {
    return action => {
      console.log("MiddleWare",action)
      const result = next(action)
      console.log("MiddleWare 2",store.getState())
      return result;
    }
  }
};


const store = createStore(
  reducers,
  {},
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;