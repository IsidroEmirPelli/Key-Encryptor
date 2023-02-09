import { FC } from 'react';
import { useNavigate } from 'react-router-dom';


const SignIn: FC = () => {
    const nav = useNavigate()

    const navToSignIn = () => { nav('/sign-in') }

    return (
        <button type="button" className="btn btn-outline-dark" onClick={navToSignIn}>Sign In</button>
    )
}

export default SignIn