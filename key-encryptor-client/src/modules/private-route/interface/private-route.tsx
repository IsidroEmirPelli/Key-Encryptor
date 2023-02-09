import { ReactElement } from "react";

export default interface PrivateRouteInterface {
    element: ReactElement,
    renderIfSigned: boolean
}