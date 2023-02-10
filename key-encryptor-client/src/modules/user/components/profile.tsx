import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/modules/auth/context/component/auth-context";

const Profile: FC = () => {
    const { user } = useContext(AuthContext)
    const nav = useNavigate()

    const validateForm = () => { }

    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col-12">
                    <label htmlFor="username" className="form-label">User name</label>
                    <input type="text" className="form-control" id="username" placeholder="" value={user.username} required></input>
                    <div className="invalid-feedback">
                        Valid user name is required.
                    </div>
                </div>
                <div className="col-sm-4">
                    <label htmlFor="old-pass" className="form-label">Old password</label>
                    <input type="text" className="form-control" id="old-pass" required></input>
                    <div className="invalid-feedback">
                        {/* Acá hay que validar que ponga contraseña pero que además sea correcta */}
                        Valid password is required.
                    </div>
                </div>
                <div className="col-sm-4">
                    <label htmlFor="new-pass" className="form-label">New password</label>
                    <input type="text" className="form-control" id="new-pass" required></input>
                    <div className="invalid-feedback">
                        Valid new password is required.
                    </div>
                </div>
                <div className="col-sm-4">
                    <label htmlFor="confirm-new-pass" className="form-label">Confirm new password</label>
                    <input type="text" className="form-control" id="confirm-new-pass" required></input>
                    <div className="invalid-feedback">
                        {/* Acá hay que validar que sea igual a la nueva contraseña */}
                        Valid confirm new passowrd is required.
                    </div>
                </div>
                <div className="col-12">
                    <p className="lead">
                        User with {user.keyList.length} encrypted keys
                    </p>
                </div>
                <hr className="my-4"></hr>
                <div className="col-sm-6">
                    <button className="w-100 btn btn-primary btn-lg" onClick={validateForm}>Save</button>
                </div>
                <div className="col-sm-6">
                    <button className="w-100 btn btn-primary btn-lg" onClick={
                        () => { nav('/keylist') }
                    }>Return to key list</button>
                </div>
            </div>
        </div>
    )
}


export default Profile