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

    // destructuring
    const value = {
        vinyls
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };