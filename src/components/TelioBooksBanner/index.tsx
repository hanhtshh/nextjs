import * as React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { T } from '../../hooks/translation';
import { WrapImage } from '../WrapImage';
import { openTelioBooksAppStore, openTelioBooksPlayStore } from '../../utils';

const TelioBooksBanner = () => {
  const { locale } = useRouter();
  const isVietnamese = locale === 'vi';
  return (
    <div className={styles.telioBooksBannerSection}>
      <div className={styles.telioBooksBannerBody}>
        <WrapImage
          desktop={{
            src: '/images/telioBooksLogo.svg',
            alt: 'teliobooks_logo',
            layout: 'fill',
            objectFit: 'cover',
            className: styles.telioBooksBannerBooksLogo,
          }}
        />
        <div className={styles.telioBooksBannerContentContainer}>
          <span className={styles.telioBooksBannerTitle}>
            {T('telioBooksBanner.title')}
          </span>
          <span className={styles.telioBooksBannerMessage}>
            {T('telioBooksBanner.message')}
          </span>
          <div className={styles.telioBooksBannerStoreLogoContainer}>
            {isVietnamese ? (
              <div onClick={openTelioBooksPlayStore}>
                <WrapImage
                  desktop={{
                    src: '/images/play-store-vi.png',
                    alt: '',
                    layout: 'fill',
                    objectFit: 'cover',
                    className: styles.telioBooksBannerPlayStoreLogo,
                  }}
                />
              </div>
            ) : (
              <div onClick={openTelioBooksPlayStore}>
                <WrapImage
                  desktop={{
                    src: '/images/play-store-en.png',
                    alt: '',
                    layout: 'fill',
                    objectFit: 'cover',
                    className: styles.telioBooksBannerPlayStoreLogo,
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
                    layout: 'fill',
                    objectFit: 'cover',
                    className: styles.telioBooksBannerAppStoreLogo,
                  }}
                />
              </div>
            ) : (
              <div onClick={openTelioBooksAppStore}>
                <WrapImage
                  desktop={{
                    src: '/images/app-store-en.png',
                    alt: '',
                    layout: 'fill',
                    objectFit: 'cover',
                    className: styles.telioBooksBannerAppStoreLogo,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.telioBooksBannerPhoneContainer}>
        <div className={styles.telioBooksBannerPhoneFrame}>
          {isVietnamese ? (
            <WrapImage
              desktop={{
                src: '/images/teliobooks-vi.png',
                alt: '',
                layout: 'fill',
                objectFit: 'cover',
                className: styles.telioBooksBannerBooksScreen,
              }}
            />
          ) : (
            <WrapImage
              desktop={{
                src: '/images/teliobooks-en.png',
                alt: '',
                layout: 'fill',
                objectFit: 'cover',
                className: styles.telioBooksBannerBooksScreen,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TelioBooksBanner;
