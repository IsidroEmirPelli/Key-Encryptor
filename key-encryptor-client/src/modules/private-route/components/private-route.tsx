import { FC, useContext } from "react"
import { AuthContext } from "src/modules/auth/context/component/auth-context"
import PrivateRouteInterface from "../interface/private-route"


const PrivateRoute: FC<PrivateRouteInterface> = ({ element, renderIfSigned }) => {
    return useContext(AuthContext).isAuth && renderIfSigned ? element : null
}

export default PrivateRoute