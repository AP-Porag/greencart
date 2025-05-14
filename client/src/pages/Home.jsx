import React from 'react';
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import BestSeller from "../components/BestSeller.jsx";

const Home = () => {
    return (
        <div className="mt-10">
            <Hero/>
            <Categories/>
            <BestSeller/>
        </div>
    )
};

export default Home;
