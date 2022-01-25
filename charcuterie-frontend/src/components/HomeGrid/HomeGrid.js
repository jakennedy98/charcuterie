import React from 'react'
import * as S from "./Styles"
import Nav from "../nav/Navbar"

function HomeGrid() {
    return (
        <S.HomeGrid>  
            <S.PhotoOne>
                <img src="/images/strawberry.png" alt="image" height = "100%;" width = "100%" opacity = "0.1" />
            </S.PhotoOne>
            <S.PhotoTwo>
                <div/>
                <S.ShopNowButton>Shop Now</S.ShopNowButton>
            </S.PhotoTwo>
            <S.PhotoThree>

                <img src="/images/Chocolate.png" alt="image" width = "100%" opacity = "0.1" />
            </S.PhotoThree>
        </S.HomeGrid>
    )
}

export default HomeGrid
