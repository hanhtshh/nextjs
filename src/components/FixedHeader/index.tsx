/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import styles from './styles.module.css';
import {
  openTelioAppAppStore,
  openTelioAppPlayStore,
  openTelioZalo,
} from '../../utils';
import { useRouter } from 'next/router';
import { T } from '../../hooks/translation';
import DropDownToolTip from '../DropDownToolTip';
import { languages, stores, TELIO_BLOG, TELIO_CAREERS } from '../../constants';
import { WrapImage } from '../WrapImage';
const onStoreSelect = (event: any) => {
  event.target.value === 'iOS'
    ? openTelioAppAppStore()
    : openTelioAppPlayStore();
};
type FixedHeaderProps = {
  toTop: number;
};
const FixedHeader = ({ toTop }: FixedHeaderProps) => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);
  const [isDownloadDropDownVisible, setDownloadDropDownVisible] =
    useState(false);
  const headerRef = useRef<any>(null);
  const heroTextRef = useRef<any>(null);
  const [showHero, setShowHero] = useState(true);
  const [state, setState] = useState({
    showHeader: false,
    fixedHeader: false,
  });

  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const [checkDropDown, setCheckDropDown] = useState(true);
  const handleLanguageChange = useCallback(
    (event) => {
      const { value } = event.target;
      if (locale !== value) {
        router.push({ pathname, query: query }, asPath, {
          locale: value,
        });
      }
      setDropDownVisible(false);
    },
    [locale, pathname, query, asPath, router]
  );
  const handleDropDownMenu = useCallback(() => {
    setDropDownVisible(!isDropDownVisible);
  }, [isDropDownVisible]);
  const toggleDownloadDropDown = useCallback(() => {
    setDownloadDropDownVisible((currentValue) => !currentValue);
    toTop < 0 ? setCheckDropDown(true) : setCheckDropDown(false);
  }, [toTop]);

  useEffect(() => {
    if (toTop >= 0) {
      setTimeout(() => {
        setState((state) => ({
          ...state,
          showHeader: true,
        }));
      }, 200);
      setTimeout(() => {
        setShowHero(false);
      }, 200);
      setTimeout(() => {
        setState((state) => ({
          ...state,
          fixedHeader: true,
        }));
      }, 650);
    } else {
      setState((state) => ({
        ...state,
        showHeader: false,
        fixedHeader: false,
      }));
      setTimeout(() => {
        setShowHero(true);
      }, 200);
    }
  }, [toTop]);
  const show2 = '';
  const show = '';
  return (
    <div className={`${styles.fixedHeaderWrapper}`} ref={headerRef}>
      <div className={`${styles.fixedHeaderContainerBox} ${show} ${show2}`}>
        <div className={`${styles.fixedHeaderContainer} ${show}`}>
          <span
            className={`${styles.heroSubText} ${showHero ? styles.show : ''}`}
            ref={heroTextRef}
          >
            {T('title.heroBannerSubTitle')}
          </span>
          <div className={styles.headerTelioAppsContainer}>
            <div
              className={`${styles.dropDownBarWrapper} ${show}`}
              id='drop-down-fixed-header'
            >
              <div onClick={handleDropDownMenu}>
                <WrapImage
                  desktop={{
                    src: `/images/${T('flag')}.png`,
                    alt: 'language',
                    layout: 'fill',
                    objectFit: 'cover',
                    className: `${styles.localeFlag} ${styles.dropdownButton}`,
                  }}
                />
              </div>

              <div className={styles.fixedHeaderDropDown}>
                {isDropDownVisible && (
                  <DropDownToolTip
                    options={languages}
                    onClick={handleLanguageChange}
                    onClickOutside={handleDropDownMenu}
                    id='fixedHeaderLanguage'
                    customContainerStyle={{ minWidth: 145 }}
                  />
                )}
              </div>
            </div>
            <div
              className={styles.BuyOnZaloWrapper}
              style={{ position: 'relative', height: 35 }}
              onClick={toggleDownloadDropDown}
            >
              <span className={styles.downloadAppText}>
                {T('zaloApp.download')}
              </span>
              <WrapImage
                desktop={{
                  src: '/images/Download.png',
                  alt: 'zalo-logo',
                  layout: 'fill',
                  objectFit: 'cover',
                  className: `${styles.headerIcons} fixed-header-zalo-logos`,
                }}
              />
              <div
                className={`${styles.fixedHeaderDropDown} ${
                  styles.fixedHeaderDownloadDropDown
                } ${checkDropDown ? styles.down : ''}`}
              >
                {isDownloadDropDownVisible && (
                  <DropDownToolTip
                    options={stores}
                    onClick={onStoreSelect}
                    onClickOutside={toggleDownloadDropDown}
                    id='fixedHeaderDownloadApp'
                    down={!checkDropDown}
                  />
                )}
              </div>
            </div>
            <div className={styles.BuyOnZaloWrapper} onClick={openTelioZalo}>
              <span className={styles.buyOnZaloText}>
                {' '}
                {T('fixedHeader.telioZaloStore')}
              </span>
              <WrapImage
                desktop={{
                  src: '/images/zalo-logo.png',
                  alt: 'zalo-logo',
                  layout: 'fill',
                  objectFit: 'cover',
                  className: `${styles.headerIcons} fixed-header-zalo-logos ${
                    state.showHeader ? styles.show : ''
                  }`,
                }}
              />
            </div>
          </div>
          <div className={`${styles.headerAboutTelio} ${show}`}>
            <div style={{ position: 'relative' }}>
              <a
                href={TELIO_BLOG + T('link')}
                className={`${styles.headerAboutTelioText} ${styles.headerAdvantage}`}
              >
                blog
              </a>
              <div className={styles.headerAboutTelioChoose}></div>
            </div>
            <a
              className={`${styles.headerAboutTelioText} ${styles.headerAdvantage} ${styles.headerAboutTelio_flex}`}
              href={TELIO_CAREERS + T('link')}
            >
              {T('fixedHeader.careers')}
              <div className={styles.dot} />
            </a>
            <div className={styles.logoTelioBox}>
              <WrapImage
                desktop={{
                  src: '/images/Logo-Telio.png',
                  alt: 'zalo-logo',
                  layout: 'fill',
                  objectFit: 'cover',
                  className: styles.headerZaloImage,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
