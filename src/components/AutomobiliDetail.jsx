import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AutomobileDetails() {
    const { id } = useParams();
    const [autoSelected, setAutoSelected] = useState(null);
    const endpoint = (`http://127.0.0.1:8080/automobili/api/${id}`);
    useEffect(() => {
        axios.get(endpoint)
            .then(res => {
                setAutoSelected(res.data)
            }
            )
            .catch(err => {
                console.error(err)
            }
            );
    }, [id]);

    if (!autoSelected) return <p className="text-center mt-5">Caricamento...</p>;

    return <body className='bg-secondary'>
        <div className="container mx-auto mb-5">
            <h1 className='text-center mt-5 text-light'>{autoSelected.marca}</h1>
            <h5 className="text-center mb-5 text-light">{autoSelected.modello}</h5>
            <div className=" d-flex">
                <img
                    src={autoSelected.immagine_url}
                    className=" rounded-4 mx-5 img-detail"
                    alt="auto"
                />
                <div className="text-light">
                    <h3 className="mb-1 fs-1"></h3>

                    <strong>
                        <p className="fs-3">Prezzo: {autoSelected.prezzo} $</p>
                    </strong>
                    <p className="fs-3">Anno: <strong>{autoSelected.anno_produzione}</strong></p>
                    <p className="fs-3">Carburante: <strong>{autoSelected.carburante}</strong></p>
                    <p className="fs-3">Trasmissione: <strong>{autoSelected.trasmissione}</strong></p>
                    <p className="fs-4">Descrizione: <strong>{autoSelected.descrizione}</strong></p>
                    <p className="fs-4">Optionals:</p>

                    {autoSelected.optionalList && autoSelected.optionalList.length > 0 ? (
                        <ul>
                            {autoSelected.optionalList.map((opt) => (
                                <li key={opt.id}>{opt.nome}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nessun optional presente</p>
                    )}

                </div>
            </div>
            <div className="container mt-5 mb-5 bg-dark text-white">

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descrizione</th>
                            <th>Valutazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autoSelected.recensioni && autoSelected.recensioni.length > 0 ? (
                            autoSelected.recensioni.map(({ id, descrizione, valutazione }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{descrizione}</td>
                                    <td>{valutazione}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Nessuna recensione presente al momento</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </body>
}
