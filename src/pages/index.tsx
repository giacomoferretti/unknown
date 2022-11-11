import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Webcam from "react-webcam";

import { env } from "@/env/client.mjs";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>{`${env.NEXT_PUBLIC_EXPERIENCE_NAME}`}</title>
      </Head>

      <main>
        <Webcam mirrored />
      </main>
    </>
  );
};

export default Home;
