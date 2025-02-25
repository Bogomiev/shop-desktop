import $api from "api";
import {AxiosResponse} from 'axios';
import { UsersResponse } from 'models/response/users-response'

export default class UserService {
    
    static users(userType: string, term: string): Promise<AxiosResponse<UsersResponse>> {
        return $api.get<UsersResponse>('/users',{params: {userType, term}})
    }
}

