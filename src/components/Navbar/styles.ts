import styled from "styled-components";

export const NavbarLayout = styled.ul`
  display: flex;
  padding: 1rem;

  li {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-left: 1rem;
  }
`;
