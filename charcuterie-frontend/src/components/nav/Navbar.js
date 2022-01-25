import React from 'react'
import * as S from "./Styles"

function Navbar() {
    return (
        <S.Nav>
        
            <S.Logo>Charcuterie Girl</S.Logo>
            <S.Links>
                <li><a>Shop</a></li>
                <li><a>About Me</a></li>
                <li><a>Contact</a></li>
            
            </S.Links>
            
        </S.Nav>
    )
}

export default Navbar
