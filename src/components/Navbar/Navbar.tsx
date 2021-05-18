import Link from "next/link";
import React from "react";

import { NavbarLayout } from "./styles";

interface NavbarProps {
  liens: Array<{ titre: string; url: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ liens }) => (
  <nav>
    <NavbarLayout>
      {liens.map((lien) => (
        <li key={lien.url}>
          <Link href={lien.url}>
            <a>{lien.titre}</a>
          </Link>
        </li>
      ))}
    </NavbarLayout>
  </nav>
);
