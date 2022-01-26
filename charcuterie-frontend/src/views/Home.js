import React from 'react';
import Nav from "../components/nav/Navbar"
import HomeGrid from "../components/HomeGrid/HomeGrid"
import Products from "../components/products/Products"

function Home() {
    return (
        <div>
            <Nav/>
            <HomeGrid/>  
            <Products/>
        </div>
    )
}

export default Home;