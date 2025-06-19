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

    // categories filter
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = [...new Set(vinyls.map(v => v.category))];

    // search bar
    const [query, setQuery] = useState("");

    // title and categories order
    const [sortBy, setSortBy] = useState("title");
    const [order, setOrder] = useState("asc");

    const sortVinyls = arr =>
        [...arr].sort((a, b) =>
            order === "asc"
                ? a[sortBy].localeCompare(b[sortBy])
                : b[sortBy].localeCompare(a[sortBy])
        );

    const handleSortChange = (value) => {
        const [field, order] = value.split("-");
        setSortBy(field);
        setOrder(order);
    };

    const filteredVinyls = sortVinyls(
        vinyls.filter(v =>
            v.title.toLowerCase().includes(query.trim().toLowerCase()) &&
            (selectedCategory === "" || v.category === selectedCategory)
        )
    );

    // wishlist
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem("wishlist");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (vinyl) => {
        setWishlist(prev =>
            prev.some(v => v.id === vinyl.id)
                ? prev                // se già presente, non fare nulla
                : [...prev, vinyl]    // altrimenti aggiungi
        );

        console.log("Aggiungo alla wishlist:", vinyl);
    };

    const removeFromWishlist = (vinyl) => {
        console.log("Rimuovo dalla wishlist:", vinyl);
        if (!vinyl || !vinyl.id) return;
        setWishlist(prev => prev.filter(v => v && v.id !== vinyl.id));
    };

    const deleteWishlist = () => setWishlist([]);

    // comparator
    const [firstSelectedId, setFirstSelectedId] = useState("");
    const [secondSelectedId, setSecondSelectedId] = useState("");

    // destructuring
    const value = {
        vinyls,
        filteredVinyls,
        query,
        setQuery,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        order,
        handleSortChange,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        deleteWishlist,
        firstSelectedId,
        setFirstSelectedId,
        secondSelectedId,
        setSecondSelectedId
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };