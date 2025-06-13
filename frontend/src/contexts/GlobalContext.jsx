import { createContext, useContext, useState, useEffect } from "react"

const url = import.meta.env.VITE_API_URL;

// creo provider
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    // GET
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

    // categories
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = [...new Set(vinyls.map(v => v.category))];

    // search bar
    const [query, setQuery] = useState("");

    const filteredVinyls = vinyls.filter(v => (
        v.title.toLowerCase().includes(query.trim().toLowerCase()) &&
        selectedCategory === "" || v.category === selectedCategory
    ));

    // destructuring
    const value = {
        vinyls,
        filteredVinyls,
        query,
        setQuery,
        categories,
        selectedCategory,
        setSelectedCategory
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };