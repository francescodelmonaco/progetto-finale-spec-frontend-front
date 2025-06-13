import { Link } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function HomePage() {
    const { filteredVinyls, query, setQuery, categories, selectedCategory, setSelectedCategory } = useGlobalContext();

    return (
        <>
            <h1 className="text-center p-3">Home Page</h1>

            <div className="d-flex justify-content-between align-items-center gap-5">
                <select
                    className="form-select w-25"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value={""}>Filtra per genere</option>
                    {
                        categories.map((c, id) => (
                            <option key={id} value={c}>{c}</option>
                        ))
                    }
                </select>

                <form className="d-flex w-50" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Cerca per titolo..."
                        aria-label="Search"
                        value={query}
                        onChange={e => setQuery(e.target.value)} />
                </form>

                <button type="button" className="btn btn-outline-secondary w-25">Ordina</button>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    filteredVinyls.map((v, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <Link to={`/vinyls/${v.id}`} className="card-body">
                                    <img src={v.cover} className="card-img h-75" alt={v.title}></img>

                                    <h5 className="card-title mt-3">{v.title}</h5>

                                    <div className="d-flex flex-column">
                                        <span>{v.artist}</span>
                                        <span>{v.category}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}