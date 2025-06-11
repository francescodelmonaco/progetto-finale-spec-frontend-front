import { BrowserRouter, Routes, Route } from "react-router-dom"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// pages
import HomePage from "./pages/HomePage"
import VinylDetails from "./pages/VinylDetails"
import ComparatorPage from "./pages/ComparatorPage"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/details" Component={VinylDetails} />
            <Route path="/comparator" Component={ComparatorPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}