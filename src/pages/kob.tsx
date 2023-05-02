import React from "react";
import { withLayout } from "@/Layout/Layout";
import {
  BusinessLoans,
  KobCarousel,
  KobNews,
  OtherOperations,
  Support,
  TradeFinance,
} from "@/page-components";
import Head from "next/head";

const Kob = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>KOB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <KobCarousel />
        <Support />
        <BusinessLoans />
        <TradeFinance />
        <OtherOperations />
        <KobNews />
      </main>
    </>
  );
};

export default withLayout(Kob);

// export async function getServerSideProps({}: GetServerSideProps) {
//   try {
//     const kobSliderData = await getKobSliderItemsData();
//     const operationsData = await getOperationsData();

//     if (!kobSliderData && !operationsData) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: { kobSliderData, operationsData },
//     };
//   } catch {
//     return {
//       props: null,
//     };
//   }
// }
