import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

import { BurgerMenuLayout } from "./styles";

interface BurgerMenuProps {
  liens: Array<{ titre: string; url: string }>;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ liens }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        aria-hidden="true"
        size="2x"
        onClick={() => setOpen(!isOpen)}
      />
      {isOpen && (
        <BurgerMenuLayout>
          <FontAwesomeIcon
            icon={faTimes}
            aria-hidden="true"
            size="2x"
            onClick={() => setOpen(!isOpen)}
          />
          {liens.map((lien) => (
            <Link key={lien.url} href={lien.url}>
              <a>{lien.titre}</a>
            </Link>
          ))}
        </BurgerMenuLayout>
      )}
    </>
  );
};
