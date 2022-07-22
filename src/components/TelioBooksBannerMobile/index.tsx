import * as React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { WrapImage } from '../WrapImage';
import SectionTitle from '../SectionTitle';
import { openTelioBooksAppStore, openTelioBooksPlayStore } from '../../utils';

const TelioBooksBannerMobile = () => {
  const { locale } = useRouter();
  const isVietnamese = locale === 'vi';
  return (
    <div className={styles.telioBooksBannerSection}>
      <WrapImage
        desktop={{
          src: '/images/telioBooksLogo.svg',
          alt: 'teliobooks_logo',
          className: styles.telioBooksBannerBooksLogo,
          layout: 'fill',
          objectFit: 'cover',
        }}
      />
      <SectionTitle
        title='telioBooksBanner.title'
        text='telioBooksBanner.message'
        subTitleColor='#0795FF'
      />
      <div className={styles.telioBooksBannerBody}>
        <div className={styles.telioBooksBannerContentContainer}>
          <div className={styles.telioBooksBannerPhoneFrame}>
            {isVietnamese ? (
              <WrapImage
                desktop={{
                  src: '/images/teliobooks-vi.png',
                  alt: '',
                  className: styles.telioBooksBannerBooksScreen,
                  layout: 'fill',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <WrapImage
                desktop={{
                  src: '/images/teliobooks-en.png',
                  alt: '',
                  className: styles.telioBooksBannerBooksScreen,
                  layout: 'fill',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
          <div className={styles.telioBooksBannerStoreLogoContainer}>
            {isVietnamese ? (
              <div onClick={openTelioBooksPlayStore}>
                <WrapImage
                  desktop={{
                    src: '/images/play-store-vi.png',
                    alt: '',
                    className: styles.telioBooksBannerPlayStoreLogo,
                    layout: 'fill',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ) : (
              <div onClick={openTelioBooksPlayStore}>
                <WrapImage
                  desktop={{
                    src: '/images/play-store-en.png',
                    alt: '',
                    className: styles.telioBooksBannerPlayStoreLogo,
                    layout: 'fill',
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}
            {isVietnamese ? (
              <div onClick={openTelioBooksAppStore}>
                <WrapImage
                  desktop={{
                    src: '/images/app-store-vi.png',
                    alt: '',
                    className: styles.telioBooksBannerAppStoreLogo,
                    layout: 'fill',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ) : (
              <div onClick={openTelioBooksAppStore}>
                <WrapImage
                  desktop={{
                    src: '/images/app-store-en.png',
                    alt: '',
                    className: styles.telioBooksBannerAppStoreLogo,
                    layout: 'fill',
                    objectFit: 'cover',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelioBooksBannerMobile;
