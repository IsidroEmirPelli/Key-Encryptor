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
    const [localCounter, setLocalCounter] = useState<number>(0)
    const [tokenCounter, setTokenCounter] = useState<number>(0)


    // useEffect(() => {
    //     if (!isAuth) {
    //         redirect('/login')
    //         authVerify(setIsAuth)
    //     }
    //     const interval = setInterval(() => {
    //         setCounter(counter + 1)
    //     }, 20000);
    //     return () => clearInterval(interval)
    // }, [isAuth, counter])

// - Eixsten 2 contadores:
//     - 1 para la actividad del usuario, donde este resetea con la actividad del usuario
//     - otro para el refresh del token, donde no resetea nunca (10 min constantes), 1 min menos del limite consulta por el token nuevo y se reinicia el contador

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalCounter(localCounter + 1)
        }, 72000);
        return () => clearInterval(interval)
    }, [isAuth, localCounter])


    // Contador TOKEN
    useEffect(() => {
        const interval = setInterval(() => {
            setTokenCounter(tokenCounter + 1)
        }, 68400);
        authVerify(setIsAuth)
        return () => clearInterval(interval)
    }, [isAuth, tokenCounter])


    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}