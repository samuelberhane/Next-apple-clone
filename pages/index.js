import Head from "next/head";
import { Footer, Header } from "../components";
import { HeroImage, HomeImage } from "../components/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Apple Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <Header />

        {/* Home Images */}
        {/* iPhone 14 Pro */}
        <HomeImage
          name="iPhone 14 Pro"
          title="Pro. Beyond."
          price="999"
          image="/img/iPhone14_pro.jpg"
          background={false}
        />

        {/* iPhone 14 */}
        <HomeImage
          name="iPhone 14"
          title="Big and bigger."
          image="/img/iPhone14.jpg"
          price="799"
          background={true}
        />
      </main>

      {/* store images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4 my-4 h-[85vh] md:h-[65vh] lg:h-[80vh]">
        <HeroImage
          name="WATCH"
          title="A healthy leap ahead."
          image="/img/apple_watch.jpg"
          price="399"
        />
        <HeroImage
          name="HomePod"
          title="Profound sound."
          image="/img/homepod.jpg"
          price="299"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4 h-[85vh] md:h-[65vh] lg:h-[80vh] mb-4">
        <HeroImage
          name="Creativity and community"
          title="Explore the new Black Unity watch."
          image="/img/promo_bhm.jpg"
          price="249"
        />
        <HeroImage
          name="Valentine's Day"
          title="Sealed with a gift."
          image="/img/promo_valentines.jpg"
          text={true}
          background={true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4 h-[85vh] md:h-[65vh] lg:h-[80vh] mb-4">
        <HeroImage
          name="Apple for K-12"
          title="Product designed to inspire learners and educators."
          image="/img/promo_education.jpg"
          text={true}
          background={true}
        />
        <HeroImage
          name="Card"
          title="Get up to 3% Daily Cash back with every purchase."
          image="/img/apple_card.jpg"
          text={true}
          background={true}
        />
      </div>
      <Footer />
    </>
  );
}
