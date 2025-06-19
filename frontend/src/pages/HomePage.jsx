import { Link } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"

// component
import VinylCard from "../components/VinylCard"

export default function HomePage() {
    const { filteredVinyls,
        query,
        setQuery,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        order,
        handleSortChange
    } = useGlobalContext();

    return (
        <>
            <h1 className="text-center p-3">Catalogo vinili</h1>

            <div className="d-flex justify-content-between align-items-center gap-3 flex-column flex-lg-row">
                <div className="w-100 d-flex flex-column justify-content-between gap-1">
                    <label><strong>Filtra per genere</strong></label>

                    <select
                        className="form-select rounded-pill"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        <option value={""}>Tutti i generi</option>
                        {
                            categories.map((c, id) => (
                                <option key={id} value={c}>{c}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="w-100 d-flex flex-column justify-content-between gap-1">
                    <label><strong>Ricerca per titolo</strong></label>

                    <form role="search">
                        <input
                            className="form-control me-2 rounded-pill"
                            type="search"
                            placeholder="Titolo vinile"
                            aria-label="Search"
                            value={query}
                            onChange={e => setQuery(e.target.value)} />
                    </form>
                </div>

                <div className="w-100 d-flex flex-column justify-content-between gap-1">
                    <label><strong>Ordina</strong></label>

                    <select
                        className="form-select rounded-pill"
                        value={`${sortBy}-${order}`}
                        onChange={e => handleSortChange(e.target.value)}
                    >
                        <option value="title-asc">Titolo A ⮕ Z</option>
                        <option value="title-desc">Titolo Z ⮕ A</option>
                        {
                            selectedCategory === "" && (
                                <>
                                    <option value="category-asc">Genere A ⮕ Z</option>
                                    <option value="category-desc">Genere Z ⮕ A</option>
                                </>
                            )
                        }
                    </select>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-4 my-3">
                {
                    filteredVinyls.map((v, index) => (
                        <div key={index} className="col">
                            <VinylCard
                                vinyl={v}
                                vinylId={v.id}
                                cover={v.cover}
                                title={v.title}
                                artist={v.artist}
                                genre={v.category}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}