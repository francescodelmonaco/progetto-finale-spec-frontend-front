import { BrowserRouter, Routes, Route } from "react-router-dom"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// pages
import HomePage from "./pages/HomePage"
import VinylDetails from "./pages/VinylDetails"
import ComparatorPage from "./pages/ComparatorPage"
import WishListPage from "./pages/WishListPage"
import { GlobalProvider } from "./contexts/GlobalContext"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/vinyls/:id" Component={VinylDetails} />
              <Route path="/comparator" Component={ComparatorPage} />
              <Route path="/wishlist" Component={WishListPage} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}