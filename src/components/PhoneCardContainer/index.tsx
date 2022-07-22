/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { T } from '../../hooks/translation';
import { ZALO_LINK } from '../../constants';
import { WrapImage } from '../WrapImage';
import TelioZaloApp from '../TelioZaloApp';
const PhoneCardContainer = () => {
  const phoneCardConatinerRef = useRef<any>(null);
  const fixZaloButtonRef = useRef<any>(null);
  const [image1Show, setImage1Show] = useState(false);
  const [image2Show, setImage2Show] = useState(false);
  const [fixedCard, setFixedCard] = useState(false);
  const [fixedZaloButton, setFixedZaloButton] = useState(false);
  const [endScroll, setEndScroll] = useState(false);
  const handleScroll = () => {
    if (phoneCardConatinerRef.current) {
      let rect = phoneCardConatinerRef.current.getBoundingClientRect();
      rect.top - 20 < 0 ? setFixedCard(true) : setFixedCard(false);

      rect.bottom - window.innerHeight + 20 < 0
        ? setEndScroll(true)
        : setEndScroll(false);

      rect.top + 800 - window.innerHeight / 2 < 0
        ? setImage1Show(true)
        : setImage1Show(false);
      rect.top + 1600 - window.innerHeight / 2 < 0
        ? setImage2Show(true)
        : setImage2Show(false);
    }
    if (fixZaloButtonRef.current) {
      let rect1 = fixZaloButtonRef.current.getBoundingClientRect();
      rect1.top - 20 < 0 ? setFixedZaloButton(true) : setFixedZaloButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const show = fixedCard ? styles.show : '';
  const show1 = fixedZaloButton ? styles.show1 : '';
  const show2 = endScroll ? styles.show2 : '';
  return (
    <div
      className={`${styles.phoneCardContainer} ${show}`}
      ref={phoneCardConatinerRef}
      id='phone-card-container'
    >
      <div
        className={styles.zaloFeaturesWrapper}
        id='text-wrapper'
        ref={fixZaloButtonRef}
      >
        <div className={`${styles.phoneCardsWrapper} feature-cards-wrapper`}>
          <WrapImage
            desktop={{
              src: '/images/best-offer.svg',
              alt: 'genuine-product-logo',
              layout: 'fill',
              objectFit: 'cover',
              className: styles.valueIcon,
            }}
          />
          <div className={styles.featureCardContianer}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTextWrapper}>
                <span className={styles.featureCardHeading}>
                  {T('zaloApp.exclusiveOffersText1')}
                </span>
                {/* <br /> */}
                <span className={styles.featureCardHeading}>
                  {T('zaloApp.exclusiveOffersText2')}
                </span>
                <div className={styles.featureCardText}>
                  {T('zaloApp.genuineProductsSubText')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='buy-on-zalo'
          className={`${styles.fixZaloButton} ${show2} ${show1}`}
        >
          <div className={`${styles.BuyOnZaloWrapperBox}`}>
            <a
              className={styles.BuyOnZaloWrapper}
              id='buy-on-zalo-content'
              href={ZALO_LINK}
              target='_blank'
              rel='noreferrer'
            >
              <WrapImage
                desktop={{
                  src: '/images/zalo-logo.png',
                  alt: 'zalo-logo',
                  layout: 'fill',
                  objectFit: 'cover',
                  className: `${styles.headerIcons} fixed-header-zalo-logos`,
                }}
              />
              <span
                className={styles.buyOnZaloText}
                style={{ marginRight: 10 }}
              >
                {T('zaloApp.buyOnZalo')}
              </span>
            </a>
          </div>
        </div>

        <div className={`${styles.phoneCardsWrapper} feature-cards-wrapper`}>
          <WrapImage
            desktop={{
              src: '/images/fast-delivery.svg',
              alt: 'offer-logo',
              className: styles.valueIcon,
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
          <div className={`${styles.featureCardContianer} feature-content`}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTextWrapper}>
                <span className={styles.featureCardHeading}>
                  {T('zaloApp.proposition2Text1')}
                </span>
                <span className={styles.featureCardHeading}>
                  {T('zaloApp.proposition2Text2')}
                </span>
                <div className={styles.featureCardText}>
                  {T('zaloApp.proposition2SubText')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.phoneCardsWrapper} feature-cards-wrapper`}
          id='fast-delivery-card'
        >
          <WrapImage
            desktop={{
              src: '/images/cash-on-delivery.svg',
              alt: 'fast-delivery-logo',
              className: styles.valueIcon,
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
          <div className={styles.featureCardContianer}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTextWrapper}>
                <span className={styles.featureCardHeading}>
                  {T('zaloApp.proposition3Text1')}
                </span>
                <span className={styles.featureCardHeading}>
                  {T('zaloApp.proposition3Text2')}
                </span>
                <div className={styles.featureCardText}>
                  {T('zaloApp.proposition3SubText')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.phoneFrameWrapper} ${show2} ${show} phone-frame-wrapper`}
        id='phone-card'
      >
        <TelioZaloApp
          fixedCard={fixedCard}
          image1Show={image1Show}
          image2Show={image2Show}
        />
      </div>
    </div>
  );
};
export default PhoneCardContainer;
