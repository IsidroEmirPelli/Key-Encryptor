import { createContext, FC, ReactNode, useEffect, useState } from "react";
import UserInterface from "src/modules/user/interface/user";
import authVerify from "../../services/auth-verify";
import AuthContextInterface from "../interface/auth-context";
import getUser from "src/modules/user/services/get-user";

export const AuthContext = createContext<AuthContextInterface>({
    isAuth: false,
    setIsAuth: () => { },
    user: {
        username: '',
        password: '',
        keyList: [],
        img: ''
    },
    setUser: () => { }
})

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState<UserInterface>(
        { username: '', password: '', keyList: [], img: '' }
    )
    const [localCounter, setLocalCounter] = useState<number>(0)
    const [tokenCounter, setTokenCounter] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalCounter(localCounter + 1)
        }, 1200000);
        return () => clearInterval(interval)
    }, [isAuth, localCounter])

    // Contador fijo para REFRESH
    useEffect(() => {
        let intervalId: any
        if (isAuth) {
            intervalId = setInterval(() => {
                authVerify(setIsAuth)
            }, 1140000)
        }
        return () => { clearInterval(intervalId) }
    }, [isAuth])

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}