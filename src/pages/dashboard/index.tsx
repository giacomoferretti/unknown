import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

import { env } from "@/env/client.mjs";
import { trpc } from "@/utils/trpc";

// TODO: Optimize component
const QrCode = ({ input }: { input: string }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    QRCode.toDataURL(input, { scale: 8 }).then((data) => setData(data));
  }, [input]);

  return (
    <>
      {data.length !== 0 && (
        <Image
          className="h-[6.8rem] w-[6.8rem] "
          alt=""
          src={data}
          width={200}
          height={200}
        />
      )}
    </>
  );
};

const Dashboard: NextPage = () => {
  const hello = trpc.analytics.getBySlug.useQuery("qr", {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  const [qr, setQr] = useState("");

  useEffect(() => {
    setQr(location.origin + "/api/track/qr");
  }, []);

  return (
    <>
      <Head>
        <title>{`Dashboard | ${env.NEXT_PUBLIC_EXPERIENCE_NAME}`}</title>
      </Head>

      <div className="mx-auto flex h-screen w-screen flex-col items-center justify-center bg-white py-16 text-stone-800">
        <h1 className="flex flex-col text-center text-5xl font-extrabold">
          {env.NEXT_PUBLIC_EXPERIENCE_NAME}{" "}
          <span className="p-2 text-xl font-normal">
            - Campaign Analytics -
          </span>
        </h1>
        <div className="mt-20 flex flex-row items-center justify-center">
          <div className="mx-auto  flex h-32 w-80 items-center justify-between rounded-full border-2 border-stone-800 p-6">
            <h2 className="ml-4 text-xl font-bold text-stone-800">
              QR Code visits
            </h2>
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-stone-500">
              <p className="text-2xl font-extrabold">
                {hello.isLoading && <>Loading...</>}
                {hello.data && <>{hello.data.hits.toString()}</>}
              </p>
            </div>
          </div>
          <div className=" mx-4 flex h-[10rem] w-[10rem] items-center justify-center rounded-full p-2">
            {qr && <QrCode input={qr} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
