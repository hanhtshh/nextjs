/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { T } from '../../hooks/translation';
import { WrapImage } from '../WrapImage';
import ProductCard from '../ProductCard';
import { ZALO_LINK } from '../../constants';

const contents = [
  {
    icon: '/images/best-offer.svg',
    title: ['zaloApp.exclusiveOffersText1', 'zaloApp.exclusiveOffersText2'],
    text: 'zaloApp.genuineProductsSubText',
  },
  {
    icon: '/images/cash-on-delivery.svg',
    imageVI: '/images/value2-vi.png',
    imageEN: '/images/value2-en.png',
    title: ['zaloApp.proposition2Text1', 'zaloApp.proposition2Text2'],
    text: 'zaloApp.proposition2SubText',
    translatedImage: true,
  },
  {
    icon: '/images/fast-delivery.svg',
    image: '/images/value3.png',
    title: ['zaloApp.proposition3Text1', 'zaloApp.proposition3Text2'],
    text: 'zaloApp.proposition3SubText',
    translatedImage: false,
  },
];

const PhoneCardContainerMobile = () => {
  const { locale } = useRouter();

  const isVietnamese = locale === 'vi';
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <WrapImage
          desktop={{
            src: contents[0].icon,
            alt: '',
            className: styles.topIcon,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
        <div className={styles.contentTitle}>
          {contents[0].title.map((word) => `${T(word)} `)}
        </div>
        <div className={styles.contentText}>{T(contents[0].text)}</div>
        <div className={styles.mobileFrame}>
          <div
            className={styles.mobileContent}
            style={{ overflow: 'hidden', paddingTop: 58 }}
          >
            <WrapImage
              desktop={{
                src: isVietnamese
                  ? '/images/value1-banner-vi.png'
                  : '/images/value1-banner-en.png',
                alt: '',
                className: `${styles.promoBanner} zalo-phone-sku-wrapper`,
                layout: 'fill',
                objectFit: 'cover',
              }}
            />
            <div className={styles.productCards}>
              <ProductCard fixedCard={true} />
            </div>
          </div>
        </div>
      </div>
      {contents
        .slice(1)
        .map(
          ({
            title,
            text,
            icon,
            image,
            translatedImage,
            imageEN,
            imageVI,
          }: any) => (
            <div className={styles.content} key={title}>
              <WrapImage
                desktop={{
                  src: icon,
                  alt: '',
                  className: styles.topIcon,
                  layout: 'fill',
                  objectFit: 'cover',
                }}
              />
              <div className={styles.contentTitle}>
                {title.map((word: string) => `${T(word)} `)}
              </div>
              <div className={styles.contentText}>{T(text)}</div>
              <div className={styles.mobileFrame}>
                <div className={styles.mobileContent}>
                  {!translatedImage ? (
                    <WrapImage
                      desktop={{
                        src: image,
                        alt: '',
                        layout: 'fill',
                        objectFit: 'cover',
                        className: styles.mobileContentImage,
                      }}
                    />
                  ) : (
                    <WrapImage
                      desktop={{
                        src: !isVietnamese ? imageEN : imageVI,
                        alt: '',
                        layout: 'fill',
                        objectFit: 'cover',
                        className: styles.mobileContentImage,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        )}
      <a
        className={styles.buyOnZaloContainer}
        href={ZALO_LINK}
        target='_blank'
        rel='noreferrer'
      >
        <WrapImage
          desktop={{
            src: '/images/zalo-logo.png',
            alt: '',
            className: styles.zaloLogo,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
        <span className={styles.buyOnZaloText}>{T('zaloApp.buyOnZalo')}</span>
      </a>
    </section>
  );
};

export default PhoneCardContainerMobile;
