import axios from 'axios'
import Swal from 'sweetalert2'

const delKey = (id: string, action: CallableFunction) => {
    axios.post(
        'http://127.0.0.1:8000/api/',
        id,
        { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    ).then(res => { action() }
    ).catch(err => { Swal.fire('Failed to delete key') })
}

export default delKey