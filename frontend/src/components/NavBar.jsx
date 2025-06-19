import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link to={"/"} className="d-flex align-items-center justify-content-center gap-2 logo-nav shadow rounded-pill px-1">
                    <img src="/src/assets/vinylmatch-logo.svg" alt="Vinyl logo" style={{ height: 50 }} />
                    <h3 className="mt-2 pe-3 logo-title">VinylMatch</h3>
                </Link>

                <button className="navbar-toggler shadow rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto gap-3 text-center rounded-pill p-1 shadow d-flex align-items-center">
                        <li className="nav-item px-3">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Catalogo</NavLink>
                        </li>

                        <li className="nav-item px-3">
                            <NavLink className="nav-link" aria-current="page" to={"/comparator"}>Comparatore</NavLink>
                        </li>

                        <li className="nav-item px-3">
                            <NavLink className="nav-link" aria-current="page" to={"/wishlist"}>Preferiti</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}