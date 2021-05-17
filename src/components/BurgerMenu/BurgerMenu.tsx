import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { BurgerMenuLayout } from "./styles";

interface BurgerMenuProps {
  liens: Array<{ titre: string; url: string }>;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ liens }) => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef();

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <FontAwesomeIcon
        icon={isOpen ? faTimes : faBars}
        aria-hidden="true"
        size="2x"
        onClick={() => setOpen(!isOpen)}
      />
      {isOpen && (
        <BurgerMenuLayout>
          {liens.map((lien) => (
            <Link key={lien.url} href={lien.url}>
              <a>{lien.titre}</a>
            </Link>
          ))}
        </BurgerMenuLayout>
      )}
    </div>
  );
};
