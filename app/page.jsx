import Link from "next/link";
import styles from "../styles/styles.module.css";

export const metadata = {
  title: "Home",
  description: "Welcome to Space web app",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-between p-10">
      <section className=" text-gray-500 flex-1 flex flex-col justify-center ml-10">
        <div className=" w-1/2">
          <h2 className="text-4xl font-bellefair ml-4">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1
            className="text-white font-bellefair"
            style={{ fontSize: "10rem" }}
          >
            SPACE
          </h1>
          <p className=" pl-4 w-full leading-8">
            Space Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>
      </section>
      <section className="flex-1 flex justify-center">
        <div>
          <div className={styles.circleContainer}>
            <Link
              href="/destination"
              className="text-4xl font-bellefair tracking-widest"
            >
              EXPLORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
