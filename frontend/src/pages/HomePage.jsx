import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function HomePage() {
    // richiesta index vinili
    const url = "http://localhost:3001/vinyls";
    const [vinyls, setVinyls] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setVinyls(data);
                console.log(data);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <h1 className="text-center p-3">Home Page</h1>

            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary">Filtri</button>

                <form className="d-flex w-50" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>

                <button type="button" className="btn btn-outline-secondary">Ordina</button>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    vinyls.map((v, index) => (
                        <div key={index} className="col">
                            <div className="card">
                                <Link to={`/vinyls/${v.id}`} className="card-body">
                                    <h5 className="card-title">{v.title}</h5>

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