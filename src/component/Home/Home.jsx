// import React from 'react';

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;