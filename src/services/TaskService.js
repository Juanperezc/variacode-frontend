import axios from './AxiosInstance'

class TaskService {

    static index = ()=>{
        return axios.get('/tasks', );
    }
    static delete = (id)=>{
        return axios.delete('/tasks/' + id);
    }
    static store = (data)=>{
        return axios.post('/tasks', data);
    }
}

export default TaskService;