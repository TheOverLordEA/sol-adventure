"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ItemNav({ number, pageTitle, path }) {
  const pathname = usePathname();

  return (
    <li
      className={`link ${
        pathname === path
          ? "active border-b-4 text-white border-white tracking-widest flex items-center h-full hover:border-b-4 gap-3"
          : "text-white hover:border-b-4 hover:border-gray-500 tracking-widest flex items-center h-full"
      }`}
    >
      <Link href={path} className="flex gap-3">
        <span className="font-bold ">{number}</span>{" "}
        <span className=" ">{pageTitle}</span>{" "}
      </Link>
    </li>
  );
}

// text-white hover:border-b-2 tracking-widest flex items-center h-full

// className={
//   router.pathname == path
//     ? "active text-white hover:border-b-2 tracking-widest flex items-center h-full"
//     : "text-white hover:border-b-2 border-gray-200 tracking-widest flex items-center h-full"
// }

// className={`link ${pathname === path ? "active text-black" : ""}`}

// flex gap-3
