import axios from 'axios'
import Swal from 'sweetalert2'
import KeyDataInterface from '../interface/key-data-interface'

const getKey = (title: string): KeyDataInterface => {
    let keyData = { title: '', username: '', password: '', notes: '' }
    axios.post('http://127.0.0.1:8000/api/', title)
        .then(res => { keyData = res.data })
        .catch(err => { Swal.fire('Failed to get key') })
    return keyData
}

export default getKey