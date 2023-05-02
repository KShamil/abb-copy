import React from "react";
import { withLayout } from "@/Layout/Layout";
import {
  CorporateAccount,
  CorporateCarousel,
  CorporativeBusiness,
  News,
} from "@/page-components";
import Head from "next/head";
import { BusinessCardsCarousel } from "@/page-components/BusinessCardsCarousel/BusinessCardsCarousel";


const Corporative = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Korporativ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CorporateCarousel />
        <CorporateAccount />
        <CorporativeBusiness />
        <BusinessCardsCarousel />
        <News />
      </main>
    </>
  );
};

export default withLayout(Corporative);

// export async function getServerSideProps({}: GetServerSideProps) {
//   const corporativeCardData = await getCorporativeData();
//   const businessCardData = await getBusinessCardData();
//   const corporateSliderData = await getCorporateSliderItemsData();

//   return {
//     props: { corporativeCardData, businessCardData, corporateSliderData },
//   };
// }
