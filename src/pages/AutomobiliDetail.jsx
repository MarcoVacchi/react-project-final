import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AutomobileInfo from '../components/AutomobileInfo';
import RecensioniTabella from '../components/RecensioniTabella';



export default function AutomobileDetails() {
    const { id } = useParams();
    const [autoSelected, setAutoSelected] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/automobili/api/${id}`)
            .then(res => setAutoSelected(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!autoSelected) return <p className="text-center mt-5">Caricamento...</p>;

    return (
        <div className='bg-secondary'>
            <div className="container mx-auto mb-5">
                <AutomobileInfo auto={autoSelected} />
                <RecensioniTabella recensioni={autoSelected.recensioni} />
            </div>
        </div>
    );
}
