import { FC, useContext } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "src/modules/auth/context/component/auth-context";
import SignOut from "src/modules/auth/components/sign-out/sign-out";

const Navbar: FC<{ username: string, img: string }> = ({ username, img }) => {
    const { isAuth } = useContext(AuthContext);
    const nav = useNavigate();

    const navHome = () => { nav('/') }

    const renderIfAuth = () => {
        return (
            <div className="container-fluid">
                <button type="button" className="btn btn-outline-dark" onClick={navHome}>Key Encryptor</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }

    const renderIfNotAuth = () => {
        return (
            <div></div>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            {isAuth ? renderIfAuth() : renderIfNotAuth()}
        </nav>
    )
}

export default Navbar