/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';
import { useWindowWidth } from '../src/hooks/useWindowWidthHook';
import HeroBanner from '../src/components/HeroBanner';
import VerticalCardsContainer from '../src/components/VerticalCardsContainer';
import ZaloDownload from '../src/components/ZaloDownload';
import dynamic from 'next/dynamic';
import FooterBanner from '../src/components/footerBanner';
import Footer from '../src/components/footer';
import Reviews from '../src/components/Reviews';
import Investors from '../src/components/Investors';
import Seo from '../src/components/Seo';
import TelioBooksBannerMobile from '../src/components/TelioBooksBannerMobile';
import TelioBooksBanner from '../src/components/TelioBooksBanner';
import Products from '../src/components/Products';
const DynamicFixedHeader = dynamic(
  () => import('../src/components/FixedHeader'),
  {
    ssr: false,
  }
);
const DynamicFixedHeaderMobile = dynamic(
  () => import('../src/components/FixedHeaderMobile'),
  {
    ssr: false,
  }
);
const DynamicPhoneCardContainer = dynamic(
  import('../src/components/PhoneCardContainer'),
  {
    ssr: false,
  }
);
const DynamicPhoneCardContainerMobile = dynamic(
  import('../src/components/PhoneCardContainerMobile'),
  {
    ssr: false,
  }
);
const DynamicCitiesMapLottie = dynamic(
  import('../src/components/CitiesMapLottiefrom'),
  {
    ssr: false,
  }
);
// const DynamicProducts = dynamic(import('../src/components/Products'), {
//   ssr: false,
// });
const IndexPage = () => {
  const width = useWindowWidth();
  const [showHeader, setShowHeader] = useState(false);

  return (
    <>
      <Seo title='Telio' />
      <main>
        <div className={styles.mainPageContainer}>
          <div className={styles.heroBannerWrapper}>
            <HeroBanner />
          </div>
          <div
            className={`${styles.mainPgaeContentWrapper} main-page-container`}
          >
            {width > 700 && (
              <>
                <DynamicFixedHeader />
              </>
            )}
            {width <= 700 && (
              <>
                {/* <div className={`${styles.fixedHeaderDummyPadding} dummy-fixed-header`} /> */}
                <DynamicFixedHeaderMobile showHeader={showHeader} />

                <div className={styles.topAdjuster}>
                  <ZaloDownload setShowHeader={setShowHeader} />
                </div>
              </>
            )}
            <VerticalCardsContainer />
            <Products />

            <div className='zalo-app-container'>
              {width > 800 && <DynamicPhoneCardContainer />}
              {width <= 800 && <DynamicPhoneCardContainerMobile />}
              {/* <ZaloDownload selector="zalo-app-download-container" /> */}
            </div>
            <DynamicCitiesMapLottie />
            {width > 700 && <TelioBooksBanner />}
            {width <= 700 && <TelioBooksBannerMobile />}
            <Reviews />
            <Investors />
            <FooterBanner />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
