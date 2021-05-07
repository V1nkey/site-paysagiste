import { faBars } from "@fortawesome/free-solid-svg-icons";
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
          {liens.map((lien) => (
            <li key={lien.url}>
              <Link href={lien.url}>
                <a>{lien.titre}</a>
              </Link>
            </li>
          ))}
        </BurgerMenuLayout>
      )}
    </>
  );
};
