import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex gap-5">
                <Link to={"/"}>
                    <img src="/src/assets/vinylmatch-logo.svg" alt="Vinyl logo" style={{ height: 50 }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/details"}>Details</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/comparator"}>Comparator</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}