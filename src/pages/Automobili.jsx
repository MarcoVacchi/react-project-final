import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Automobili() {
    const [automobili, setAutomobili] = useState([]);
    const endpoint = "http://127.0.0.1:8080/automobili/api";

    useEffect(() => {
        axios.get(endpoint)
            .then(res => {
                setAutomobili(res.data)
            }
            )
            .catch(err => {
                console.error(err)
            }
            );
    }, []);

    return <body className='bg-secondary'>
        <div className="container">
            <h1 className="text-center mt-5 mb-5 p-5 text-light  rounded">
                Le nostre automobili!
            </h1>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mb-5">
                {automobili.map(({ id, immagine_url, marca, modello, prezzo }) => (
                    <div className="col" key={id}>
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={immagine_url}
                                className="card-img-top img-fluid"
                                alt="auto"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h3 className="card-title mb-1">{marca}</h3>
                                <h5 className="card-title mb-1">{modello}</h5>
                                <strong><p className="mb-1">Prezzo: {prezzo} $</p></strong>

                                <Link
                                    to={`/automobili/${id}`}
                                    className="btn btn-outline-primary btn-sm mt-2"
                                >
                                    Dettagli auto
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </body>

}
