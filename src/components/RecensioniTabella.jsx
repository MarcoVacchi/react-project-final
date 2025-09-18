export default function RecensioniTable({ recensioni }) {
    return (
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
                    {recensioni && recensioni.length > 0 ? (
                        recensioni.map(({ id, descrizione, valutazione }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{descrizione}</td>
                                <td>{valutazione}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Nessuna recensione presente al momento</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
