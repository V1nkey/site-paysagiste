import React from "react";
import { PrestationFooter, PrestationHeader } from "./styles";

interface PrestationProps {
  titre: string;
}
export const Prestation: React.FC<PrestationProps> = ({ titre, children }) => (
  <>
    <PrestationHeader>{titre}</PrestationHeader>
    {children}
    <PrestationFooter>
      Pour plus d'informations sur la prestation ou les tarifs, contactez-moi
    </PrestationFooter>
  </>
);
