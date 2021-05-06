import React from "react";
import Link from "next/link";
import { BurgerMenuLayout } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface BurgerMenuProps {
  liens: Array<{ titre: string; url: string }>;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ liens }) => (
  <>
    <FontAwesomeIcon icon={faBars} />
    <BurgerMenuLayout>
      {liens.map((lien) => (
        <li key={lien.url}>
          <Link href={lien.url}>
            <a>{lien.titre}</a>
          </Link>
        </li>
      ))}
    </BurgerMenuLayout>
  </>
);
