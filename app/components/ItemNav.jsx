"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/styles.module.css";

export default function ItemNav({ number, pageTitle, path }) {
  const pathname = usePathname();

  return (
    <li
      className={`link ${
        pathname === path ? styles.activeBorder : styles.beforeBorder
      }`}
    >
      <Link href={path} className="flex gap-3">
        <span className="font-bold ">{number}</span>{" "}
        <span className=" ">{pageTitle}</span>{" "}
      </Link>
    </li>
  );
}

// ("active border-b-4 text-white border-white tracking-widest flex items-center h-full hover:border-b-4 gap-3");

//Create before and and after
// before:content-["*"] before:absolute;|

// {`link ${
//   pathname === path
//     ? "active border-b-4 text-white border-white tracking-widest flex items-center h-full hover:border-b-4 gap-3"
//     : "text-white hover:border-b-4 hover:border-gray-500 tracking-widest flex items-center h-full"
// }`}
