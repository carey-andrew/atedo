"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={`${pathName === item.path && styles.active}`}>
      {item.title}
    </Link>
  );
};

export default NavLink;

// .container {
//   min-width: 100px;
//   padding: 10px;
//   border-radius: 20px;
//   font-weight: 500;
//   text-align: center;
// }
