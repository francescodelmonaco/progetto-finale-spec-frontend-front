import { useState, useEffect } from "react"
import { useParams } from "react-router"

const url = import.meta.env.VITE_API_URL;

export default function VinylDetails() {
    const { id } = useParams();

    // SHOW
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
            <h1 className="text-center pt-3">{vinyl.title}</h1>
            <h3 className="text-center pb-3">{vinyl.artist}</h3>

            <div className="d-flex justify-content-between gap-3">
                <figure className="w-50">
                    <img className="w-100" src={vinyl.cover} alt={vinyl.title} />
                </figure>

                <div className="d-flex flex-column w-50">
                    <span><strong>Genere: </strong>{vinyl.category}</span>
                    <span><strong>Anno di pubblicazione: </strong>{vinyl.releaseYear}</span>
                    <span><strong>Formato: </strong>{vinyl.format}</span>
                    <span><strong>RPM: </strong>{vinyl.rpm}</span>
                    <span><strong>Colore vinile: </strong>{vinyl.vinylColor}</span>
                    <span><strong>Lingua: </strong>{vinyl.language}</span>
                    <span><strong>Numero tracce: </strong>{vinyl.tracksNumber}</span>
                </div>
            </div>
        </>
    )
}