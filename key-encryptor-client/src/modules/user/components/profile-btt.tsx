import { FC, useContext } from "react";
import { AuthContext } from "src/modules/auth/context/component/auth-context";

const ProfileBtt: FC = () => {
    const { user } = useContext(AuthContext);

    const navToProfile = () => {
        // Acá se tiene que enviar POST con el token para recibir "permiso" (solo validar el token) de editar el perfil
        // Si se obtiene permiso redirecciona hacia profile.tsx, sino, desloguea
    }

    return (
        <div>
            <img src={user.img} className="rounded mx-auto d-block" alt="Profile Pic"></img>
            <button type="button" className="btn btn btn-link" onClick={ navToProfile }>
                {user.username}
            </button>
        </div>
    )
}


export default ProfileBtt