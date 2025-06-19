import { useGlobalContext } from "../contexts/GlobalContext"

export default function VinylDatasList({
    label,
    selectValue,
    selectChangeValue,
    defaultValue,
    vinylToCompare,
    otherId
}) {
    const { vinyls } = useGlobalContext();

    return (
        <div className="w-100">
            <label className="py-1"><strong>{label}</strong></label>

            <select
                className="w-100 form-select rounded-pill"
                value={selectValue}
                onChange={selectChangeValue}
            >
                <option value={""}>{defaultValue}</option>
                {vinyls
                    .filter(v => String(v.id) !== String(otherId))
                    .map((v, id) => (
                        <option key={id} value={v.id}>{v.title}</option>
                    ))}
            </select>

            {vinylToCompare && (
                <>
                    <figure className="list-cover my-3 card-img">
                        <img
                            src={vinylToCompare.cover}
                            className="rounded h-100 w-100 shadow"
                            alt={vinylToCompare.title}
                        ></img>
                    </figure>

                    <ul className="my-3 list-group list-group-flush">
                        <li className="list-group-item"><strong>Titolo:</strong> {vinylToCompare.title}</li>
                        <li className="list-group-item"><strong>Artista:</strong> {vinylToCompare.artist}</li>
                        <li className="list-group-item"><strong>Genere: </strong>{vinylToCompare.category}</li>
                        <li className="list-group-item"><strong>Anno di pubblicazione: </strong>{vinylToCompare.releaseYear}</li>
                        <li className="list-group-item"><strong>Etichetta discografica: </strong>{vinylToCompare.recordLabel.join(", ")}</li>
                        <li className="list-group-item"><strong>Formato: </strong>{vinylToCompare.format}</li>
                        <li className="list-group-item"><strong>RPM: </strong>{vinylToCompare.rpm}</li>
                        <li className="list-group-item"><strong>Colore vinile: </strong>{vinylToCompare.vinylColor}</li>
                        <li className="list-group-item"><strong>Lingua: </strong>{vinylToCompare.language}</li>
                        <li className="list-group-item"><strong>Numero tracce: </strong>{vinylToCompare.tracksNumber}</li>
                    </ul>
                </>
            )}
        </div>
    )
};