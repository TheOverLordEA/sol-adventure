import Link from "next/link";
import Image from "next/image";
import ItemNav from "./ItemNav";

export default function NavBar() {
  const logoImage = "../../public/images/assets/shared/logo.svg";
  return (
    <header className="flex mt-10 ml-10 mr-0">
      <div className=" flex-1">
        <Link href="/">
          <Image
            src="/images/assets/shared/logo.svg"
            alt="Space flight logo"
            width={100}
            height={100}
            className=""
          />
        </Link>
        <div className="white"></div>
      </div>
      <nav
        className="flex flex-1 items-center justify-start pl-5"
        style={{ backdropFilter: "blur(100px)" }}
      >
        <ul className=" flex items-center ml-5 gap-8">
          <ItemNav number="00" pageTitle="HOME" path="/" />
          <ItemNav number="01" pageTitle="DESTINATION" path="/destination" />
          <ItemNav number="02" pageTitle="CREW" path="/crew" />
          <ItemNav number="03" pageTitle="TECHNOLOGY" path="/technology" />
        </ul>
      </nav>
    </header>
  );
}
