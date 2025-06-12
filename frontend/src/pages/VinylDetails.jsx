import { useState, useEffect } from "react"
import { useParams } from "react-router"

export default function VinylDetails() {
    // richiesta show singolo vinile
    const { id } = useParams();
    const url = "http://localhost:3001/vinyls";
    const [selectedVinyl, setSelectedVinyl] = useState({});
    useEffect(() => {
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedVinyl(data);
                console.log(data);
            })
            .catch(err => console.error(err))
    }, []);

    const { vinyl } = selectedVinyl;

    if (!vinyl) return <div className="text-center py-3">Caricamento...</div>;

    return (
        <>
            <h1 className="text-center p-3">{vinyl.title}</h1>
        </>
    )
}