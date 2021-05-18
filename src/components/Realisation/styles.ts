import styled from "styled-components";

export const ImagesRealisationLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 380px));
  gap: 2.4rem 3.2rem;
  justify-content: space-around;

  padding-bottom: 2.4rem;
`;

export const ImageLayout = styled.img`
  width: 100%;
  max-width: 380px;
`;
