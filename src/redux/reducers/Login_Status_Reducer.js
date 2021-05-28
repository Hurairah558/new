import {ActionType} from '../constants/Login_Status_Constants';


const intialState = {
    IsLogin: false,
    HOD: false,
    MeritList_Controller:{},
    Session_Data:{}
  };

  export const Login_Status_Reducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionType.Set_Login_Status:
        return { ...state, IsLogin: payload };
      case ActionType.Set_Login_Type:
        return { ...state, HOD: payload };
      case ActionType.MeritList_Controller:
        return { ...state, MeritList_Controller: payload };
      case ActionType.Session_Data:
        return { ...state, Session_Data: payload };
      default:
        return state;
    }
  };