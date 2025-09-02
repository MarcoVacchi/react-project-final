import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage d-flex align-items-center justify-content-center text-light">
            <div className="text-center">
                <h1 className="display-3 fw-bold mb-4">Benvenuto su AutoLux</h1>
                <img src='/lux.png' alt="Auto di lusso" className="img-detail mb-4" />
                <p className="lead mb-5">
                    Scopri la nostra collezione di auto esclusive, sportive, familiari e di lusso.
                </p>
                <Link to="/automobili" className="btn btn-outline-light btn-lg px-5 py-2">
                    Esplora le Auto
                </Link>
            </div>
        </div>
    );
}
