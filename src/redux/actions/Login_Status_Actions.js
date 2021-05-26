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

export const Merit_List_Data = (data) => {
    return {
        type : ActionType.Merit_List_Data,
        payload : data
    }
}

export const Session_Data = (Session_Datas) => {
    return {
        type : ActionType.Session_Data,
        payload : Session_Datas
    }
}