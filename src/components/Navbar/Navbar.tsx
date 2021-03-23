import React from "react";
import { NavbarLayout } from "./styles";
import Link from "next/link";

interface NavbarProps {
  liens: Array<{ titre: string; url: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ liens }) => (
  <NavbarLayout>
    {liens.map((lien) => (
      <li key={lien.url}>
        <Link href={lien.url}>
          <a>{lien.titre}</a>
        </Link>
      </li>
    ))}
  </NavbarLayout>
);
