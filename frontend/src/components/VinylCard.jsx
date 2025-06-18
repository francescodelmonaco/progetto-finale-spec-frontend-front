import { Link } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function VinylCard({ vinyl, showHeart = true, showDelete = false }) {
    const { addToWishlist, removeFromWishlist } = useGlobalContext();

    return (
        <div className="card h-100">
            <Link to={`/vinyls/${vinyl.id}`} className="card-body shadow">
                <img src={vinyl.cover} className="card-img h-75" alt={vinyl.title}></img>

                <div className="d-flex flex-column justify-content-around h-25">
                    <h5 className="card-title mt-3">{vinyl.title}</h5>

                    <div className="d-flex flex-column gap-1">
                        <span>{vinyl.artist}</span>
                        <span>{vinyl.category}</span>
                    </div>
                </div>
            </Link>

            {showHeart && (
                <button
                    className="border border heart-btn shadow"
                    onClick={() => addToWishlist(vinyl)}
                >
                    <i className="fa-solid fa-heart"></i>
                </button>
            )}

            {showDelete && (
                <button
                    className="border border heart-btn shadow"
                    onClick={() => removeFromWishlist(vinyl)}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            )}
        </div>
    )
}