import { FC, useContext } from "react";
import AuthContext from "../../context/component/auth-context";


const SignOut: FC = () => {
    const { setIsAuth } = useContext(AuthContext)

    const signOut = () => {
        setIsAuth(false)
        localStorage.remove('token')
    }

    return (
        <button className="btn btn-outline-success" onClick={signOut}>Log-Out</button>
    )
}

export default SignOut;