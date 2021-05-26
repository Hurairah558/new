import {ActionType} from '../constants/Login_Status_Constants';


const intialState = {
    IsLogin: false,
    HOD: false,
    Merit_List_Data:{},
    Session_Data:{}
  };

  export const Login_Status_Reducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionType.Set_Login_Status:
        return { ...state, IsLogin: payload };
      case ActionType.Set_Login_Type:
        return { ...state, HOD: payload };
      case ActionType.Merit_List_Data:
        return { ...state, Merit_List_Data: payload };
      case ActionType.Session_Data:
        return { ...state, Session_Data: payload };
      default:
        return state;
    }
  };