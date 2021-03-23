import styled from "styled-components";

export const NavbarLayout = styled.ul`
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
`;
