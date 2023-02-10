import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUser from 'src/modules/user/services/get-user';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/component/auth-context';
import signin from '../../services/signin';

const SignIn: FC = () => {
    const { isAuth, setIsAuth, setUser } = useContext(AuthContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate()

    useEffect(() => {
        if (isAuth) nav('/keylist')
    }, [isAuth, nav])

    const onSubmit = () => {
        const wasSigned = signin({ username: username, password: password })
        if (wasSigned) {
            setUser(getUser())
            setIsAuth(wasSigned)
            nav('/keylist')
        } else {
            Swal.fire('Incorrect data')
        }
    }

    return (
        isAuth ? null :
            <div className="main">
                <div className="form-signin w-100 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="144" height="96" fill="currentColor" className="bi bi-person-badge-fill" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                    </svg>
                    <h1 className="h3 mb-3 fw-normal mt-3">Sign in</h1>
                    <div className="form-floating">
                        <input type="username" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setUserName(e.target.value) }}></input>
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