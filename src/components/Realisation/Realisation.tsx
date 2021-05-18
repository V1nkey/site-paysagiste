import React from "react";
import { Typography } from "../../ui/Typography/Typography";
import { ImageLayout, ImagesRealisationLayout } from "./styles";

interface Image {
  src: string;
  alt: string;
}

interface RealisationProps {
  titre: string;
  description: string;
  avant: Image;
  apres: Image;
  plan: Image;
}

export const Realisation: React.FC<RealisationProps> = ({
  titre,
  description,
  avant,
  apres,
  plan,
}) => (
  <>
    <Typography.Headline2 as="h1">{titre}</Typography.Headline2>
    <p>{description}</p>
    <ImagesRealisationLayout>
      <ImageLayout src={avant.src} alt={avant.alt} />
      <ImageLayout src={apres.src} alt={apres.alt} />
      <ImageLayout src={plan.src} alt={plan.alt} />
    </ImagesRealisationLayout>
  </>
);
