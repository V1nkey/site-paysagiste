import React from "react";
import Link from "next/link";

interface BurgerMenuProps {
  liens: Array<{ titre: string; url: string }>;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ liens }) => (
  //   <ul>
  //     {liens.map((lien) => (
  //       <li key={lien.url}>
  //         <Link href={lien.url}>
  //           <a>{lien.titre}</a>
  //         </Link>
  //       </li>
  //     ))}
  //   </ul>
  <div>TEST RESPONSIVE</div>
);
