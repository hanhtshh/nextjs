/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
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
  const checkScroll = useRef<boolean>(false);
  const [toTop, setToTop] = useState(-1);
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  const handleScroll = (e: any) => {
    // or window.addEventListener("scroll"....

    if (!checkScroll.current) {
      // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      var st = e.deltaY;
      if (st > 0) {
        setToTop((toTop) => (toTop < 9 ? toTop + 1 : toTop));
      } else {
        setToTop((toTop) => (toTop > -1 ? toTop - 1 : toTop));
      }
      // For Mobile or negative scrolling
      checkScroll.current = true;
      setTimeout(() => {
        checkScroll.current = false;
      }, 700);
    }
  };
  useEffect(() => {
    if (width > 960) {
      window.addEventListener('wheel', handleScroll);
    }
    return () => {
      window.removeEventListener('weel', handleScroll);
    };
  }, [width]);

  return (
    <>
      <Seo title='Telio' />
      <main>
        <div
          className={styles.mainPageContainer}
          style={{ overflow: 'hidden', height: '100vh' }}
        >
          <div className={styles.heroBannerWrapper}>
            <HeroBanner />
          </div>
          <div
            className={`${styles.mainPgaeContentWrapper} main-page-container`}
            style={{ top: `${-toTop * 100}vh`, transition: '0.7s' }}
          >
            {width > 700 && (
              <>
                <DynamicFixedHeader toTop={toTop}/>
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
            <Products toTop={toTop} />

            <div className='zalo-app-container'>
              {width > 800 && <DynamicPhoneCardContainer toTop={toTop} />}
              {width <= 800 && <DynamicPhoneCardContainerMobile />}
              {/* <ZaloDownload selector="zalo-app-download-container" /> */}
            </div>
            <DynamicCitiesMapLottie toTop={toTop} />
            {width > 700 && <TelioBooksBanner />}
            {width <= 700 && <TelioBooksBannerMobile />}
            <Reviews />
            <Investors />
            <div className={styles.footerWrapper}>
              <FooterBanner />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
