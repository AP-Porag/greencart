import React from 'react';
import Navbar from "./components/Navbar.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.jsx";

const App = () => {
    const isSeller = useLocation().pathname.includes("/seller")
    return (
        <div>
            {isSeller? null : <Navbar/>}
            <div className={`${isSeller ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;
