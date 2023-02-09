import axios from "axios"

const authVerify = (setIsAuth: CallableFunction) => {
    const token = localStorage.getItem('token')
    const refresh = localStorage.getItem('refresh')
    if (token) {
        axios.post(
            'http://127.0.0.1:8000/api/token/refresh',
            {
                headers: { 'Authorization': `Bearer ${token}` },
                body: { 'refresh': `${refresh}` }
            }
        ).then(res => {
            setIsAuth(true)
            localStorage.setItem('token', res.data.access)
        }).catch(
            err => { setIsAuth(false) }
        )
    }
}

export default authVerify