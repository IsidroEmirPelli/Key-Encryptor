import { createContext } from "react";
import AuthContextInterface from "../interface/auth-context";

const AuthContext = createContext<AuthContextInterface>({
    isAuth: false,
    setIsAuth: () => {},
})

export default AuthContext