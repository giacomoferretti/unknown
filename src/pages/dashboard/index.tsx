import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { env } from "@/env/client.mjs";
import { trpc } from "@/utils/trpc";

const Dashboard: NextPage = () => {
  const hello = trpc.analytics.getBySlug.useQuery("qr", {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => console.log(hello), [hello]);

  return (
    <>
      <Head>
        <title>{`Dashboard | ${env.NEXT_PUBLIC_EXPERIENCE_NAME}`}</title>
      </Head>

      <div className="mx-auto flex h-screen max-w-4xl flex-col items-center justify-center py-16">
        <h1 className="flex flex-col text-center text-4xl font-extrabold">
          {env.NEXT_PUBLIC_EXPERIENCE_NAME}{" "}
          <span className="p-2 text-lg font-normal">
            - Campaign Analytics -
          </span>
        </h1>
        <div className="mx-auto mt-20 flex h-32 w-80 items-center justify-between rounded-full border border-neutral-500 p-6">
          <h2 className="ml-4 text-xl font-bold text-stone-800">
            QR Code visits
          </h2>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-neutral-500">
            <p className="text-2xl font-extrabold">
              {hello.isLoading && <>Loading...</>}
              {hello.data && <>{hello.data.hits.toString()}</>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
