export default function AutomobileInfo({ auto }) {
    return (
        <div className="d-flex">
            <img
                src={auto.immagine_url}
                className="rounded-4 mx-5 img-detail mt-5"
                alt="auto"
            />
            <div className="text-light">
                <h1 className='text-center mt-5 text-light'>{auto.marca}</h1>
                <h5 className="text-center mb-5 text-light">{auto.modello}</h5>
                <p className="fs-3">Prezzo: <strong>{auto.prezzo} $</strong></p>
                <p className="fs-3">Anno: <strong>{auto.anno_produzione}</strong></p>
                <p className="fs-3">Carburante: <strong>{auto.carburante}</strong></p>
                <p className="fs-3">Trasmissione: <strong>{auto.trasmissione}</strong></p>
                <p className="fs-4">Descrizione: <strong>{auto.descrizione}</strong></p>

                <p className="fs-4">Optionals:</p>
                {auto.optionalList && auto.optionalList.length > 0 ? (
                    <ul>
                        {auto.optionalList.map((opt) => (
                            <li key={opt.id}>{opt.nome}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Nessun optional presente</p>
                )}
            </div>
        </div>
    );
}
