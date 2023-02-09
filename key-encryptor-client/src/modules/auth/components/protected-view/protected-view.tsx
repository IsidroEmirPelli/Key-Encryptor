import { FC, ReactNode, useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "src/modules/auth/context/component/auth-context";


const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const { isAuth } = useContext(AuthContext);

    return (
        <Route element={isAuth ? children : null} />
    )
}

export default PrivateRoute