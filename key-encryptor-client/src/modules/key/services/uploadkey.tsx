import axios from "axios"
import Swal from "sweetalert2"
import KeyDataInterface from "../interface/key-data-interface"

const uploadKey = (data: KeyDataInterface) => {
    axios.post('http://127.0.0.1:8000/api/keys', data)
        .then(res => { Swal.fire('Key updated') })
        .catch(err => { Swal.fire('Data uploading error') })
}

export default uploadKey