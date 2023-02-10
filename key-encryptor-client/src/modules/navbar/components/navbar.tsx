import { FC } from "react"
import { useNavigate } from "react-router-dom";
import SignOut from "src/modules/auth/components/signout/signout-btt";
import ProfileBtt from "src/modules/user/components/profile-btt";


const Navbar: FC<{}> = () => {
    const nav = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button type="button" className="btn btn-link" onClick={() => { nav('/') }}>Key Encryptor</button>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Key search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                </form>
                <ProfileBtt />
                <SignOut />
            </div>
        </nav>
    )
}

export default Navbar