import styled from "styled-components";

export const BurgerButton = styled.button``;

export const BurgerMenuLayout = styled.ul`
  display: flex;
  padding: 1rem;

  background-color: black;
  color: white;
  text-transform: uppercase;

  li {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-left: 1rem;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
`;
