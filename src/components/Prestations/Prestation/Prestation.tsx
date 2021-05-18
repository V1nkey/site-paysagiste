import React from "react";
import { Card } from "../../../ui/Card/Card";

interface PrestationProps {
  titre: string;
}
export const Prestation: React.FC<PrestationProps> = ({ titre, children }) => (
  <Card as="li">
    <header>{titre}</header>
    {children}
    <footer>
      Pour plus d'informations sur la prestation ou les tarifs, contactez-moi
    </footer>
  </Card>
);
