import { FC, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UserInterface from 'src/modules/user/interface/user';
import './sign-in';

const SignIn: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**
    * This function is used to upload the user credentials.
    */
    const onSubmit = () => {
        const user: UserInterface = {
            email: email,
            password: password
        }
        axios.post('<api-path>', user).then(
            res => Swal.fire(res.data)
        ).then(err => Swal.fire(`Error\n${err}`))
    }

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={onSubmit}>
                <svg width="144" height="96" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <h1 className="h3 mb-3 fw-normal">Sign in</h1>
                <div className="form-floating">
                    <label htmlFor="floatingInput">Email address</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }}></input>
                </div>
                <div className="form-floating">
                    <label htmlFor="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
                </div>
                <div className="checkbox mb-3">
                    <label htmlFor="rememberMe">
                        <input type="checkbox" defaultChecked={false} id="rememberMe"></input> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    )
}

export default SignIn