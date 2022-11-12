import { type NextPage } from "next";
import Head from "next/head";

import Webcam from "@/components/Webcam";
import { env } from "@/env/client.mjs";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>{`${env.NEXT_PUBLIC_EXPERIENCE_NAME}`}</title>
      </Head>

      <main>
        {/* <Webcam mirrored /> */}

        <Webcam.Debug />
      </main>
    </>
  );
};

export default Home;
