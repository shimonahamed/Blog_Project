import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetaillsPage from "./pages/DetaillsPage.jsx";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/bycategory/:categoryID" element={<ByCategoryPage/>}/>
                <Route path="/detaills/:postID" element={<DetaillsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;