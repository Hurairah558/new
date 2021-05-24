import { combineReducers } from "redux";
import { Login_Status_Reducer } from "./Login_Status_Reducer";
const reducers = combineReducers({
    Login:Login_Status_Reducer
});
export default reducers;