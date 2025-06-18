import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link to={"/"}>
                    <img src="/src/assets/vinylmatch-logo.svg" alt="Vinyl logo" style={{ height: 50 }} className="logo-shadow" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 text-center rounded-pill px-1 shadow">
                        <li className="nav-item px-3">
                            <NavLink className="nav-link" aria-current="page" to={"/comparator"}>Comparatore</NavLink>
                        </li>

                        <li className="nav-item px-3">
                            <NavLink className="nav-link" aria-current="page" to={"/wishlist"}>Wish List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}