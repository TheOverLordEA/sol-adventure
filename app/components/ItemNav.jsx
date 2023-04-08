import Link from "next/link";

export default function ItemNav({ number, pageTitle, path }) {
  return (
    <li className=" text-cyan-50 hover:border-b-2">
      <Link href={path} className="flex gap-3">
        <span>{number}</span> <span>{pageTitle}</span>{" "}
      </Link>
    </li>
  );
}
