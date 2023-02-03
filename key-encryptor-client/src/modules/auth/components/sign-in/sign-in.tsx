import { FC, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UserInterface from 'src/modules/user/interface/user';
import { useNavigate } from 'react-router-dom';

const SignIn: FC = () => {
    const nav = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**
    * This function is used to upload the user credentials.
    */
    const onSubmit = () => {
        const user = {
            username: email,
            password: password
        }
        axios.post('http://127.0.0.1:8000/api/token', user).then(
            res => {
                localStorage.setItem('token', res.data.access)
                Swal.fire('Sesión iniciada')
                nav('/key-creator')
            }
        ).then(err => { if (err !== undefined) Swal.fire('Datos incorrectos') })
    }

    return (
        <div className="main">
            <div className="form-signin w-100 m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="144" height="96" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                </svg>
                <h1 className="h3 mb-3 fw-normal mt-3">Sign in</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }}></input>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultChecked={false} id="rememberMe"></input> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={onSubmit}>Sign in</button>
            </div>
        </div>
    )
}

export default SignIn