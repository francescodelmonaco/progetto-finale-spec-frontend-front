import { useGlobalContext } from "../contexts/GlobalContext"

// component
import VinylCard from "../components/VinylCard"

export default function WishListPage() {
    const { wishlist, query, setQuery, deleteWishlist } = useGlobalContext();

    const filteredWishlist = wishlist.filter(v =>
        v.title.toLowerCase().includes(query.trim().toLowerCase())
    );

    return (
        <>
            <h1 className="text-center p-3">Wish List</h1>

            <div className="d-flex justify-content-between align-items-center gap-5">
                <div className="w-75 d-flex flex-column justify-content-between gap-1">
                    <label><strong>Ricerca per titolo</strong></label>

                    <form role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="..."
                            aria-label="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)} />
                    </form>
                </div>

                <div className="w-25 d-flex flex-column justify-content-between gap-1">
                    <label><strong>Svuota la wishlist</strong></label>
                    <button
                        className="btn btn-outline-danger"
                        onClick={deleteWishlist}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-4 my-3">
                {
                    filteredWishlist.map((v, index) => (
                        <div key={index} className="col">
                            <VinylCard
                                vinyl={v}
                                showHeart={false}
                                showDelete={true}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}