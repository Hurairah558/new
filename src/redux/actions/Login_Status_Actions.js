import {ActionType} from '../constants/Login_Status_Constants'

export const Set_Login_Status = (IsLogin) => {
    return {
        type : ActionType.Set_Login_Status,
        payload : IsLogin
    }
}

export const Set_Login_Type = (LoginType) => {
    return {
        type : ActionType.Set_Login_Type,
        payload : LoginType
    }
}