import styled from "styled-components";

export const Nav = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:wght@300&display=swap');  height: 60px;
  width: calc(100% - 80px);
  height: 70px;
  border-bottom: 1px solid lightgray;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:wght@300&display=swap');  height: 60px;
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 10px;
  padding-top: 12px;

  @media (max-width: 768px) {
      font-size: 24px;
      padding-top: 24px;
  }

`;

export const Links = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:wght@300&display=swap');  height: 60px;
 list-style-type: none;
 display: flex;
 flex-direction: row;


 > * {
     margin: 20px;
     cursor: pointer;
 }


`;