import { BrowserRouter, Routes, Route } from "react-router-dom"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// pages
import HomePage from "./pages/HomePage"
import VinylDetails from "./pages/VinylDetails"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/details" Component={VinylDetails} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}