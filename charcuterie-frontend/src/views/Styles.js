import styled from "styled-components";

export const HomeGrid = styled.div`
  height: 500px;
  display: grid;
  grid-template-areas:
    "photo1 photo2 photo3";
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 30vw;
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
    background: #F5D5CB;
    width: 100%;
`;

export const PhotoThree = styled.div`
    grid-area: photo3;
    width: 100%;
    background: #F5D5CB;
    display: flex;
    justify-content: center;
`;

