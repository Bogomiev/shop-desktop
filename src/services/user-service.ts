import $api from "api";
import {AxiosResponse} from 'axios';
import {IUser} from "models/user";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}

