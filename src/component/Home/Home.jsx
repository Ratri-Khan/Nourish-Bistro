// import React from 'react';

import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;