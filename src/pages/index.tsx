import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import { type NextPage } from "next";
import Head from "next/head";

import { env } from "@/env/client.mjs";
import { trpc } from "@/utils/trpc";

const Header = () => {
  return (
    <div className="flex py-8 text-4xl font-bold">
      <h1>Analytics</h1>
    </div>
  );
};

const Analytic = ({
  title,
  amount,
  trend,
  trendTooltip,
}: {
  title: string;
  amount: string;
  trend: number;
  trendTooltip: string;
}) => {
  return (
    <div className="rounded-xl border bg-white p-8">
      <h3>{title}</h3>
      <h2 className="my-2 text-4xl font-bold">{amount}</h2>
      {trend >= 0 ? (
        <span className="flex flex-wrap items-center gap-2">
          <ArrowUpIcon className="h-4 w-4 stroke-green-500" />
          <span className="text-green-500">+{trend}</span> {trendTooltip}
        </span>
      ) : (
        <span className="flex flex-wrap items-center gap-2">
          <ArrowDownIcon className="h-4 w-4 stroke-red-500" />
          <span className="text-red-500">{trend}</span> {trendTooltip}
        </span>
      )}
    </div>
  );
};

const Dashboard: NextPage = () => {
  const data = trpc.analytics.getBySlug.useQuery("qr", {
    refetchInterval: 2000,
    refetchIntervalInBackground: true,
  });

  return (
    <>
      <Head>
        <title>{`Dashboard | ${env.NEXT_PUBLIC_EXPERIENCE_NAME}`}</title>
      </Head>

      <div className="min-h-full bg-neutral-100">
        <main className="mx-auto max-w-5xl px-4">
          <Header />
          <div className="grid grid-cols-2 gap-4">
            <Analytic
              title={"Visits"}
              amount={
                data.data
                  ? (Number(data.data.hits) + 123).toString()
                  : "Loading..."
              }
              trend={1.2}
              trendTooltip={"nell'utilma settimana"}
            />
            <Analytic
              title={"Average time spent"}
              amount={"1m 13s"}
              trend={-0.4}
              trendTooltip={"nell'utilma settimana"}
            />
            <Analytic
              title={"Engagement"}
              amount={"1m"}
              trend={0.6}
              trendTooltip={"nell'utilma settimana"}
            />
            <Analytic
              title={"QR Scans"}
              amount={data.data ? data.data.hits.toString() : "Loading..."}
              trend={3.4}
              trendTooltip={"nell'utilma settimana"}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
