/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import styles from "../styles/index.module.css";
// import Layout from '../components/layout';
// import Seo from '../components/seo';
// import Reviews from '../components/reviews';
// import Investors from '../components/investors';
// import TelioBooksBanner from '../components/telioBooksBanner';
// import TelioBooksBannerMobile from '../components/telioBooksBannerMobile';
// import FixedHeader from '../components/fixedHeader';
// import HeroBanner from '../components/heroBanner';
// import VerticalCardsContainer from '../components/verticalCardsContainer';
// import PhoneCardContainer from '../components/phoneCardConatiner';
// import PhoneCardContainerMobile from '../components/phoneCardContainerMobile';
// import FooterBanner from '../components/footerBanner';
// import Footer from '../components/footer';
// import ZaloDownload from '../components/zaloDownload';
// import FixedHeaderMobile from '../components/fixedHeaderMobile';
// import Products from '../components/products';
// import CitiesMapLottiefrom from '../components/citiesMapLottie';

import Layout from "../src/components/Layout/index";
import { useWindowWidth } from "../src/hooks/useWindowWidthHook";
import HeroBanner from "../src/components/HeroBanner";
import FixedHeaderMobile from "../src/components/FixedHeaderMobile";
import VerticalCardsContainer from "../src/components/VerticalCardsContainer";
import ZaloDownload from "../src/components/ZaloDownload";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Products from "../src/components/Products";
import dynamic from "next/dynamic";
import PhoneCardContainer from "../src/components/PhoneCardContainer";
import PhoneCardContainerMobile from "../src/components/PhoneCardContainerMobile";
import FooterBanner from "../src/components/footerBanner";
import Footer from "../src/components/footer";
import CitiesMapLottie from "../src/components/CitiesMapLottiefrom";
import TelioBooksBanner from "../src/components/TelioBooksBanner";
import TelioBooksBannerMobile from "../src/components/TelioBooksBannerMobile";
import Reviews from "../src/components/Reviews";
import Investors from "../src/components/Investors";
const DynamicFixedHeader = dynamic(
  () => import("../src/components/FixedHeader"),
  {
    ssr: false,
  }
);
const IndexPage = () => {
  const width = useWindowWidth();
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register scroll trigger with gsap to avoid tree shaking.

    window.onbeforeunload = function () {
      window?.scrollTo(0, 0);
    };
  }, []);

  return (
    <Layout>
      <div className={styles.mainPageContainer}>
        <div className={styles.heroBannerWrapper}>
          <HeroBanner />
        </div>
        <div className={`${styles.mainPgaeContentWrapper} main-page-container`}>
          {width > 700 && (
            <>
              <DynamicFixedHeader />
            </>
          )}
          {width && width <= 700 && (
            <>
              {/* <div className={`${styles.fixedHeaderDummyPadding} dummy-fixed-header`} /> */}
              <FixedHeaderMobile showHeader={showHeader} />

              <div className={styles.topAdjuster}>
                <ZaloDownload setShowHeader={setShowHeader} />
              </div>
            </>
          )}
          <VerticalCardsContainer />
          <Products />

          <div className="zalo-app-container">
            {width > 800 && <PhoneCardContainer />}
            {width && width <= 800 && <PhoneCardContainerMobile />}
            {/* <ZaloDownload selector="zalo-app-download-container" /> */}
          </div>
          <CitiesMapLottie />
          {width > 700 && <TelioBooksBanner />}
          {width && width <= 700 && <TelioBooksBannerMobile />}
          <Reviews />
          <Investors />
          <FooterBanner />
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
