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

export const MeritList_Controller = (data) => {
    return {
        type : ActionType.MeritList_Controller,
        payload : data
    }
}

export const Session_Data = (Session_Datas) => {
    return {
        type : ActionType.Session_Data,
        payload : Session_Datas
    }
}