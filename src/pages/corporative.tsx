import React from "react";
import { withLayout } from "@/Layout/Layout";
import { CorporateAccount, CorporateCarousel, CorporativeBusiness, News } from "@/page-components";
import { getBusinessCardData, getCorporateSliderItemsData, getCorporativeData } from "@/services/services";
import { BusinessCardData, CorporateSliderData, CorporativeData } from "@/interfaces/interfaces";
import Head from "next/head";
import { BusinessCardsCarousel } from '@/page-components/BusinessCardsCarousel/BusinessCardsCarousel';


const Corporative = ({
  corporativeCardData,businessCardData,corporateSliderData
}: {
  corporativeCardData: CorporativeData[], businessCardData: BusinessCardData[],corporateSliderData: CorporateSliderData[];
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>Korporativ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CorporateCarousel props={corporateSliderData}/>
        <CorporateAccount/>
        <CorporativeBusiness corporativeCardData={corporativeCardData} />
        <BusinessCardsCarousel props={businessCardData}/>
        <News />
      </main>
    </>
  );
};

export default withLayout(Corporative);

export async function getStaticProps() {
  const corporativeCardData = await getCorporativeData();
  const businessCardData = await getBusinessCardData();
  const corporateSliderData = await getCorporateSliderItemsData();

  return {
    props: { corporativeCardData, businessCardData, corporateSliderData },
  };
}
