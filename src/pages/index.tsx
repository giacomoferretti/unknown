import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { env } from "@/env/client.mjs";

const Home: NextPage = () => {
  useEffect(() => {
    fetch("/api/track/qr");
  }, []);

  return (
    <>
      <Head>
        <title>{`${env.NEXT_PUBLIC_EXPERIENCE_NAME} | La nuova realtà`}</title>
      </Head>

      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold">
          {env.NEXT_PUBLIC_EXPERIENCE_NAME}
        </h1>
        <h2 className="mx-4 text-2xl">Easy steps to make a difference</h2>
      </header>

      <main className="mx-auto my-8 max-w-5xl px-8">
        <ol className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-black leading-[0px] text-white">
              <span className="mx-3 inline-block pt-[50%] pb-[50%]">1</span>
            </span>
            Where possible, walk, cycle or take public transport.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-black leading-[0px] text-white">
              <span className="mx-3 inline-block pt-[50%] pb-[50%]">2</span>
            </span>{" "}
            Recycle!
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-black leading-[0px] text-white">
              <span className="mx-3 inline-block pt-[50%] pb-[50%]">3</span>
            </span>{" "}
            Local food is best for the environment.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-black leading-[0px] text-white">
              <span className="mx-3 inline-block pt-[50%] pb-[50%]">4</span>
            </span>{" "}
            Plant more vegetation.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-black leading-[0px] text-white">
              <span className="mx-3  inline-block pt-[50%] pb-[50%]">5</span>
            </span>{" "}
            Don&apos;t waste water and electricity.
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-black leading-[0px] text-white">
              <span className="mx-3  inline-block pt-[50%] pb-[50%]">5</span>
            </span>{" "}
            Close the fucking water Mattia, while brushing your goddamn teeth.
          </li>
        </ol>
      </main>
    </>
  );
};

export default Home;
