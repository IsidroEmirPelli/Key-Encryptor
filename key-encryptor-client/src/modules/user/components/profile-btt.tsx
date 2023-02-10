import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "src/modules/auth/context/component/auth-context";
import Swal from "sweetalert2";

const ProfileBtt: FC = () => {
    const { user, setIsAuth } = useContext(AuthContext);
    const nav = useNavigate();

    const navToProfile = () => {
        axios.post(
            'http://127.0.0.1:8000/api/profile',
            user.username,
            { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
        )
            .then(res => { nav('/profile') })
            .catch(err => {
                Swal.fire('Failed loading profile')
                setIsAuth(false)
            })
    }

    return (
        <div>
            <img src="{user.img}" className="img-thumbnail" alt="profile-pic"></img>
            {/* <img src={user.img} className="rounded mx-auto d-block" alt="Profile Pic"></img> */}
            <button type="button" className="btn btn btn-link" onClick={navToProfile}>
                {user.username}
            </button>
        </div>
    )
}


export default ProfileBtt