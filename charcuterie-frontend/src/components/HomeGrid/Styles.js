import styled from "styled-components";

export const HomeGrid = styled.div`
  height: 500px;
  display: grid;
  grid-template-areas:
    "photo1 photo2 photo3";
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 32vw;
  margin: 12px;

`;

export const PhotoOne = styled.div`
    grid-area: photo1;
    overflow: none;
    width: 100%;
    background-color: #F5D5CB;
`;

export const PhotoTwo = styled.div`
    grid-area: photo2;
    background-image: url(${"/images/test4.png"});
    background-size: 100%;

    background-origin: content-box;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


`;

export const PhotoThree = styled.div`
    grid-area: photo3;
    width: 100%;
    background: #F5D5CB;
    display: flex;
    justify-content: center;
`;

export const ShopNowButton= styled.button`
    background: none;
    border-radius: 10px;
    border: none;
    margin-bottom: 50px;
    cursor: pointer;
    
`;


