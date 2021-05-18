import styled from "styled-components";

export const PrestationsLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 360px));
  gap: 2.4rem 4rem;
  justify-content: space-around;

  padding-bottom: 2.4rem;

  li {
    padding: 1.2rem;
    background-color: #ebebeb;
  }
`;
