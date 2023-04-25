import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { withLayout } from "@/Layout/Layout";
import { SimpleTransitions } from "@/components/SimpleTransitions/SimpleTransitions";
import { getData, getOffersCardData, getPersonalSliderItemsData } from "@/services/services";
import { CardData, OffersCardData, PersonalSliderData } from "@/interfaces/interfaces";
import { OurOffers } from "@/components/OurOffers/OurOffers";
import { Innovation } from '@/page-components/Innovation/Innovation';
import { CreditCalculator, CurrencyConverter, News, PersonalCarousel } from '@/page-components';


function Home({ card, offerCard,personalCarouselData }: { card: CardData[], offerCard: OffersCardData[],personalCarouselData: PersonalSliderData[] }):JSX.Element {
  return (
    <>
      <Head>
        <title>ABB - Muasir Faydalı Universal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <PersonalCarousel props={personalCarouselData}/>
        <SimpleTransitions card={card} />
        <CreditCalculator/>
        <OurOffers offerCard={offerCard} />
        <CurrencyConverter/>
        <Innovation/>
        <News/>
      </main>
    </>
  );
}

export default withLayout(Home);

export async function getServerSideProps() {
  const card = await getData();
  const offerCard = await getOffersCardData();
  const personalCarouselData = await getPersonalSliderItemsData();
  return {
    props: { card, offerCard,personalCarouselData },
  };
}
