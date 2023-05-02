import React, { useState } from "react";
import { withLayout } from "@/Layout/Layout";
import {
  CorporateAccount,
  CorporateCarousel,
  CorporativeBusiness,
  News,
} from "@/page-components";
import Head from "next/head";
import { BusinessCardsCarousel } from "@/page-components/BusinessCardsCarousel/BusinessCardsCarousel";
import DialogWindow from '@/components/Dialog/Dialog';

const Corporative = (): JSX.Element => {
  const [showDialog] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Korporativ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {showDialog && <DialogWindow />}
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
