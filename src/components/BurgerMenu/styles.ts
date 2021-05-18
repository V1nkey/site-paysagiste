import styled from "styled-components";

export const BurgerMenuLayout = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background: #0d0c1d;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    color: white !important;
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    transition: color 0.3s linear;
  }
`;
