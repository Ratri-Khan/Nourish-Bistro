// import React from 'react';

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Nourish Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;