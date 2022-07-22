import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import { T } from '../../hooks/translation';
import { useWindowWidth } from '../../hooks/useWindowWidthHook';
import styles from './styles.module.css';

import { languages } from '../../constants';
import DropDownToolTip from '../DropDownToolTip';
import { WrapImage } from '../WrapImage';
import { StoreContext } from '../../utils/store';

function HeroBanner() {
  const [isDropDownVisible, setDropDownVisible] = useState(false);
  const [renderContent, setRenderContent] = useState(false);
  const { trans }: any = React.useContext(StoreContext);

  const width = useWindowWidth();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const hideIfScrolledPast = useCallback(() => {
    if (!isDropDownVisible) {
      return;
    }
    // To hide language dropdown if hdropdown is scrolled past by main page
    const mainPageContainer = document.getElementById('mainPageContainer');
    if (!mainPageContainer) {
      return;
    }
    const { y } = mainPageContainer.getBoundingClientRect();
    if (y < 70) {
      setDropDownVisible(false);
    }
  }, [isDropDownVisible]);

  useEffect(() => {
    setTimeout(() => {
      setRenderContent(true);
    }, 0);
  }, []);
  useEffect(() => {
    if (isDropDownVisible) {
      window.addEventListener('scroll', hideIfScrolledPast);
    }
    return () => {
      window.removeEventListener('scroll', hideIfScrolledPast);
    };
  }, [isDropDownVisible, hideIfScrolledPast]);

  const handleDropDownMenu = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  const handleLanguageChange = useCallback(
    (event: any) => {
      if (locale !== event?.target.value) {
        router.push({ pathname, query }, asPath, {
          locale: event.target.value,
        });
      }
      setDropDownVisible(false);
    },
    [asPath, locale, pathname, query, router, setDropDownVisible]
  );

  const isVietnamese = locale === 'vi';

  const heroTextStyle = `${styles.heroText} ${styles.textShadow} ${
    isVietnamese && styles.vietnameseHeroText
  }`;

  return (
    <div className={`${styles.heroContainer} hero-banner-container`}>
      <WrapImage
        desktop={{
          src: '/images/telio-logo-white.png',
          alt: 'logo',
          layout: 'fill',
          objectFit: 'cover',
          className: styles.logo,
        }}
      />
      <div className={styles.dropDownContainer}>
        {renderContent && (
          <div onClick={handleDropDownMenu}>
            <WrapImage
              desktop={{
                src: `/images/${trans('flag')}.png`,
                alt: '',
                layout: 'fill',
                objectFit: 'cover',
                className: styles.flag,
              }}
            />
          </div>
        )}
        {isDropDownVisible && (
          <DropDownToolTip
            options={languages}
            onClick={handleLanguageChange}
            onClickOutside={handleDropDownMenu}
            id='heroBannerLanguage'
          />
        )}
      </div>
      {renderContent && (
        <div className={styles.heroTextWrapper}>
          <div className={styles.heroMainTextWrapper}>
            <span className={heroTextStyle}>{trans('title.heroBanner1')}</span>
            <span className={styles.retailerTextWrapper}>
              <span
                className={`${styles.heroText} ${styles.heroTextGradient} ${
                  isVietnamese && styles.vietnameseHeroText
                }`}
                title={trans('title.heroBanner2')}
              >
                {trans('title.heroBanner2')}
              </span>
            </span>
            <span>
              {router.locale === 'en' && (
                <span className={heroTextStyle}>
                  {trans('title.heroBanner4')}
                </span>
              )}
              {width > 1040 && <br />}
              <span className={heroTextStyle}>
                {trans('title.heroBanner3')}
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroBanner;
