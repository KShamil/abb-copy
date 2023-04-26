import React from "react";
import { withLayout } from "@/Layout/Layout";
import { BusinessLoans, KobCarousel, KobNews, OtherOperations, Support, TradeFinance } from "@/page-components";
import Head from "next/head";
import { getKobSliderItemsData, getOperationsData } from '@/services/services';
import { KobSliderData, OperationsData } from '@/interfaces/interfaces';


const Kob = ({kobSliderData, operationsData}:{kobSliderData:KobSliderData[],operationsData:OperationsData[]}):JSX.Element => {
  return (
    <>
      <Head>
        <title>KOB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <KobCarousel props={kobSliderData}/>
        <Support/>
        <BusinessLoans/>
        <TradeFinance/>
        <OtherOperations props={operationsData}/>
        <KobNews />
      </main>
    </>
  );
};

export default withLayout(Kob);

export async function getStaticProps() {
  const kobSliderData = await getKobSliderItemsData();
  const operationsData = await getOperationsData();

  return {
    props: { kobSliderData,operationsData }
  };
}
