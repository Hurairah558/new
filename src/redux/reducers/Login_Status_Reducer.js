import {ActionType} from '../constants/Login_Status_Constants';


const intialState = {
    IsLogin: false,
    HOD: false
  };

  export const Login_Status_Reducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionType.Set_Login_Status:
        return { ...state, IsLogin: payload };
      case ActionType.Set_Login_Type:
        return { ...state, HOD: payload };
      default:
        return state;
    }
  };