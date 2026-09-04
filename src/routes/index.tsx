import { Route, Routes } from "react-router-dom"
import { FilmDetails } from "../components/FilmDetails"
import { Home } from "../pages/Home"
import { Layout } from "../components/Layout"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path={"film/:id"} element={<FilmDetails />}></Route>
            </Route>
        </Routes>
    )

}