import axios from './AxiosInstance'

class UserService {
    static login = (data)=>{
        return axios.post('/login', data);
    }
    static logout = ()=>{
        return axios.delete('/logout');
    }
    static register = (data)=>{
        return axios.post('/register', data);
    }
}

export default UserService;