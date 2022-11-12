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

      <div className="mx-auto max-w-4xl p-4">
        <h1 className="text-center text-2xl font-bold">
          {env.NEXT_PUBLIC_EXPERIENCE_NAME} - Campaign Analytics
        </h1>
        <div className="mt-4 rounded-lg border border-neutral-500 p-4">
          <h2 className="text-neutral-600">QR Code visits</h2>
          <p className="text-2xl font-bold">
            {hello.isLoading && <>Loading...</>}
            {hello.data && <>{hello.data.hits.toString()}</>}
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
