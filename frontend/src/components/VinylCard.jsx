import { Link } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function VinylCard({ vinyl, vinylId, cover, title, artist, genre }) {
    const { addToWishlist } = useGlobalContext();

    return (
        <div className="card h-100">
            <Link to={`/vinyls/${vinylId}`} className="card-body shadow">
                <img src={cover} className="card-img h-75" alt={title}></img>

                <div className="d-flex flex-column justify-content-around h-25">
                    <h5 className="card-title mt-3">{title}</h5>

                    <div className="d-flex flex-column gap-1">
                        <span>{artist}</span>
                        <span>{genre}</span>
                    </div>
                </div>
            </Link>

            <button
                className="border border-0"
                onClick={() => addToWishlist(vinyl)}
            >
                <i className="fa-solid fa-heart shadow"></i>
            </button>
        </div>
    )
}