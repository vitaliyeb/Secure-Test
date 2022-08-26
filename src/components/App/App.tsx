import {Route, Routes, BrowserRouter} from "react-router-dom";

import {IndexPage} from "../../pages/IndexPage";
import Layout from "../Layout/Layout";
import {Movies} from "../../pages/Movies";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={<Layout><IndexPage /></Layout>}
                />
                <Route
                    path="/movies/"
                    element={<Layout><Movies /></Layout>}
                />
            </Routes>
        </BrowserRouter>
    )
}