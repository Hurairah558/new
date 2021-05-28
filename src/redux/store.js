import axios from "axios";
import { createStore , applyMiddleware } from "redux";
import reducers from "./reducers/root";
import { Set_Login_Status , Session_Data } from "../redux/actions/Login_Status_Actions";

// function incrementIfOdd() {
//   return (dispatch, getState) => {
//     axios.get("http://localhost:3001/loginstatus").then((res=>{
//       dispatch(Set_Login_Status(res.data.LoggedIn))
//       dispatch(Session_Data(res.data.session))
//     }))
//   };
// }

const store = createStore(
  reducers,
  {},
  // applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;