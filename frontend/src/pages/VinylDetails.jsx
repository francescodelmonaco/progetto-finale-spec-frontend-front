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

            <div className="d-flex justify-content-between gap-5">
                <figure className="w-50">
                    <img className="w-100 rounded shadow" src={vinyl.cover} alt={vinyl.title} />
                </figure>

                <ul className="d-flex flex-column w-50">
                    <li><strong>Genere: </strong>{vinyl.category}</li>
                    <li><strong>Anno di pubblicazione: </strong>{vinyl.releaseYear}</li>
                    <li><strong>Etichetta discografica: </strong>{vinyl.recordLabel.join(", ")}</li>
                    <li><strong>Formato: </strong>{vinyl.format}</li>
                    <li><strong>RPM: </strong>{vinyl.rpm}</li>
                    <li><strong>Colore vinile: </strong>{vinyl.vinylColor}</li>
                    <li><strong>Lingua: </strong>{vinyl.language}</li>

                    <li className="mt-3"><strong>Tracklist:</strong></li>

                    <div className="d-flex flex-column mt-1">
                        {
                            vinyl.tracks.map((t, i) => <span key={i}>{i + 1} | {t}</span>)
                        }
                    </div>
                </ul>
            </div >
        </>
    )
}