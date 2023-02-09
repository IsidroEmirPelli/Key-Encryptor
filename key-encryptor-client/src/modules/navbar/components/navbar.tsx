import { FC, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/modules/auth/context/component/auth-context";
import SignOut from "src/modules/auth/components/signout/signout-btt";

const Navbar: FC<{}> = () => {
    const { user } = useContext(AuthContext);
    const nav = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button type="button" className="btn btn-link" onClick={() => { nav('/') }}>Key Encryptor</button>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Key search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
                </form>
                <button type="button" className="btn btn btn-link" onClick={() => { nav(`/${user.username}`) }}>
                    <img src={user.img} className="rounded mx-auto d-block" alt="Profile Pic"></img>
                    {user.username}
                </button>
                <SignOut />
            </div>
        </nav>
    )
}

export default Navbar