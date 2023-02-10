import { createContext, FC, ReactNode, useEffect, useState } from "react";
import UserInterface from "src/modules/user/interface/user";
import authVerify from "../../services/auth-verify";
import AuthContextInterface from "../interface/auth-context";

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

    // Contador para actividad del usuario
    useEffect(() => {
        if (isAuth) {
            let interval: any;
            const restartInterval = () => {
                clearInterval(interval);
                interval = setInterval(() => {
                    authVerify(setIsAuth)
                }, 1140000)
            };
            window.addEventListener('click', restartInterval);
            interval = setInterval(() => {
                authVerify(setIsAuth)
            }, 1140000)
            return () => {
                clearInterval(interval);
                window.removeEventListener('click', restartInterval);
            }
        }
    }, [isAuth])

    // Contador para REFRESH
    useEffect(() => {
        if (isAuth) {
            let interval: any
            interval = setInterval(() => {
                authVerify(setIsAuth)
            }, 1140000)
            return () => { clearInterval(interval) }
        }
    }, [isAuth])

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}