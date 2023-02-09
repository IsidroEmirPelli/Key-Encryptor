import { FC, useContext } from "react";
import { AuthContext } from "../../context/component/auth-context";


const SignOut: FC = () => {
    const { setIsAuth } = useContext(AuthContext)

    return (
        <button type="button" className="btn btn-outline-dark" onClick={() => {
            setIsAuth(false); localStorage.remove('token')
        }}>Sign Out</button>
    )
}

export default SignOut