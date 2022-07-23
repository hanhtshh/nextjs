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
type PhoneCardContainerProps = {
  toTop: number;
};
const PhoneCardContainer = ({ toTop }: PhoneCardContainerProps) => {
  const phoneCardConatinerRef = useRef<any>(null);
  const fixZaloButtonRef = useRef<any>(null);
  const [fixedCard, setFixedCard] = useState(0);
  useEffect(() => {
    if (toTop >= 2 && toTop <= 4) {
      setTimeout(() => setFixedCard(1), 650);
    } else if (toTop > 4) {
      setTimeout(() => setFixedCard(2), 0);
    } else {
      setTimeout(() => setFixedCard(0), 0);
    }
  }, [toTop]);
  const show = fixedCard == 1 ? styles.show : '';
  const show1 = fixedCard == 1 ? styles.show1 : '';
  const show2 = fixedCard == 2 ? styles.show2 : '';
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
          fixedCard={fixedCard == 1}
          image1Show={toTop >= 3}
          image2Show={toTop >= 4}
        />
      </div>
    </div>
  );
};
export default PhoneCardContainer;
