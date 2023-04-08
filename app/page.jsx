import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Welcome to Space web app",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-between p-10">
      <section className=" text-gray-500 flex-1 flex flex-col justify-center ml-10">
        <span className="text-4xl">SO, YOU WANT TO TRAVEL TO</span>
        <h1 className="text-white" style={{ fontSize: "10rem" }}>
          SPACE
        </h1>
        <p style={{ width: "50%" }}>
          Space Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this
          world experience! Explore
        </p>
      </section>
      <section className="flex-1 flex justify-center">
        <div>
          <div
            className="bg-white"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/destination">EXPLORE</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
