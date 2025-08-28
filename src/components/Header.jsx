import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark mb-5">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-light p-3" to="/">
                                <h5>Homepage</h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold text-light p-3" to="/automobili">
                                <h5>Automobili</h5>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
