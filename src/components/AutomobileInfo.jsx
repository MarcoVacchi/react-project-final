export default function AutomobileInfo({ auto }) {

    const { immagine_url, marca, modello, prezzo, anno_produzione, carburante, trasmissione, descrizione, optionalList } = auto;
    return <>
        <div className="d-flex">
            <img
                src={immagine_url}
                className="rounded-4 mx-5 img-detail mt-5"
                alt="auto"
            />
            <div className="text-light">
                <h1 className='text-center mt-5 text-light'>{marca}</h1>
                <h5 className="text-center mb-5 text-light">{modello}</h5>
                <p className="fs-3">Prezzo: <strong>{prezzo} $</strong></p>
                <p className="fs-3">Anno: <strong>{anno_produzione}</strong></p>
                <p className="fs-3">Carburante: <strong>{carburante}</strong></p>
                <p className="fs-3">Trasmissione: <strong>{trasmissione}</strong></p>
                <p className="fs-4">Descrizione: <strong>{descrizione}</strong></p>

                <p className="fs-4">Optionals:</p>
                {optionalList && optionalList.length > 0 ? (
                    <ul>
                        {optionalList.map((opt) => (
                            <li key={opt.id}>{opt.nome}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Nessun optional presente</p>
                )}
            </div>
        </div>
    </>
}
