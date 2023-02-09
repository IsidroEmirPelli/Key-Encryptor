import axios from 'axios';
import UserInterface from '../interface/user';
import Swal from 'sweetalert2';

const getUser = (): UserInterface => {
    let user = { username: '', password: '', keyList: [], img: '' }
    axios.post('', localStorage.getItem('token'))
        .then(res => { user = res.data.user })
        .catch(err => { Swal.fire('Failed to loading user') })
    return user
}

export default getUser