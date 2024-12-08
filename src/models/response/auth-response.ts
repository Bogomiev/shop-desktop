import {IUser} from "../user";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface AuthResponseData {
    message: String
}

export interface AuthResponse {
    data: AuthResponseData
}

export interface AuthResponseFail {
    response: AuthResponse
}

export interface MeResponse extends IUser {

}