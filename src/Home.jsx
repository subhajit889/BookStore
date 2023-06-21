import React from 'react'
import HeroSection from './component/HeroSection';
import Services from './component/Services';
import Trusted from './component/Trusted';

const Home = () => {

    const data = {
        name: "Your Favourite Book Store",
    }

    return (
        <>
            <HeroSection myData={data} />
            <Services />
            <Trusted />
        </>

    )
}

export default Home