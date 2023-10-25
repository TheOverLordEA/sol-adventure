import Link from "next/link";
import Image from "next/image";
import ItemNav from "./ItemNav";

export default function NavBar() {
  const logoImage = "../../public/images/assets/shared/logo.svg";
  return (
    <header className="flex mt-10 ml-10 mr-0">
      <div className=" flex flex-row flex-1">
        <Link href="/">
          <Image
            src="/images/assets/shared/logo.svg"
            alt="Space flight logo"
            width={100}
            height={100}
            className=""
          />
        </Link>
        <div className="flex items-center pl-10">
          <div className=" h-px w-5/11 bg-gray-500 absolute ml-5 z-10"></div>
        </div>
      </div>
      <nav
        className="flex flex-1 items-center justify-start pl-5"
        style={{ backdropFilter: "blur(100px)" }}
      >
        <ul className=" flex items-center ml-24 gap-8 h-full">
          <ItemNav number="00" pageTitle="HOME" path="/" />
          <ItemNav number="01" pageTitle="DESTINATION" path="/destination" />
          <ItemNav number="02" pageTitle="CREW" path="/crew" />
          <ItemNav number="03" pageTitle="TECHNOLOGY" path="/technology" />
        </ul>
      </nav>
    </header>
  );
}
