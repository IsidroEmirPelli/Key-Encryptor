import axios from 'axios';
import LogIn from '../interface/login';

const signin = (user: LogIn): boolean => {
    let result = true
    axios.post('http://127.0.0.1:8000/api/token', user)
        .then(res => {
            localStorage.setItem('token', res.data.access)
            localStorage.setItem('refresh', res.data.refresh)
        })
        .catch(err => { result = false })
    return result
}

export default signin