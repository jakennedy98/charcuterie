import React from 'react';
import * as S from "./Styles"
import Nav from "../components/nav/Navbar"

function Home() {
    return (
        <div>
            <Nav></Nav>
            <S.HomeGrid>  
                <S.PhotoOne>
                    <img src="/images/strawberry.png" alt="image" height = "100%;" width = "100%" opacity = "0.1" />
                </S.PhotoOne>
                <S.PhotoTwo>
                    Make a loved one feel special!
                    <button>Shop Now</button>
                </S.PhotoTwo>
                <S.PhotoThree>

                    <img src="/images/Chocolate.png" alt="image" width = "100%" opacity = "0.1" />
                </S.PhotoThree>
            </S.HomeGrid>
        </div>
    )
}

export default Home;