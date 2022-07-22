/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import { isIOS, isAndroid } from 'react-device-detect';
import styles from './styles.module.css';
import {
  openTelioAppAppStore,
  openTelioAppPlayStore,
  openTelioZalo,
} from '../../utils';
import { T } from '../../hooks/translation';
import DropDownToolTip from '../DropDownToolTip';
import { stores } from '../../constants';
import { WrapImage } from '../WrapImage';
const { useState, useCallback } = React;

// eslint-disable-next-line react/prop-types
type ZaloDownloadProps = {
  setShowHeader: any;
};
const ZaloDownload = ({ setShowHeader }: ZaloDownloadProps) => {
  const [showStores, setShowStores] = useState(false);
  const zaloDownloadRef = useRef<any>(null);
  const onAppDownloadClick = useCallback(() => {
    if (isIOS) {
      openTelioAppAppStore();
    } else if (isAndroid) {
      openTelioAppPlayStore();
    } else {
      setShowStores((currentValue) => !currentValue);
    }
  }, []);

  const onStoreSelect = useCallback((event) => {
    if (event.target.value === 'iOS') {
      openTelioAppAppStore();
    } else {
      openTelioAppPlayStore();
    }
    setShowStores(false);
  }, []);

  const hidePopup = useCallback(() => {
    setShowStores(false);
  }, []);

  const handleScroll = () => {
    if (zaloDownloadRef.current) {
      let rect = zaloDownloadRef.current.getBoundingClientRect();
      if (rect.bottom - 58 < 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className={`${styles.zaloDownloadContainer} `} ref={zaloDownloadRef}>
      <span className={styles.heroSubText} id='offers-text'>
        {T('title.heroBannerSubTitle')}
      </span>
      <button
        type='button'
        className={`${styles.zaloDownloadSubContainer} ${styles.visitZaloContainer}`}
        onClick={openTelioZalo}
      >
        <WrapImage
          desktop={{
            src: '/images/zalo-logo.png',
            alt: '',
            layout: 'fill',
            objectFit: 'cover',
            className: styles.zaloDownloadIcon,
          }}
        />
        <span className={styles.zaloDownloadVisitZalo}>
          {T('fixedHeader.telioZaloStore')}
        </span>
      </button>
      <div
        className={`${styles.zaloDownloadSubContainer} ${styles.downloadAppContainer}`}
      >
        <button
          type='button'
          className={styles.downloadAppButton}
          onClick={onAppDownloadClick}
        >
          <WrapImage
            desktop={{
              src: '/images/download.svg',
              alt: '',
              layout: 'fill',
              objectFit: 'cover',
              className: styles.zaloDownloadIcon,
            }}
          />
          <span className={styles.zaloDownloadAppDownload}>
            {T('zaloApp.download')}
          </span>
        </button>
        {showStores && (
          <div className={styles.storesContainer}>
            <div className={styles.mobileStores}>
              <button
                className={styles.store}
                type='button'
                onClick={openTelioAppAppStore}
              >
                <WrapImage
                  desktop={{
                    src: '/images/appStoreIcon.svg',
                    alt: '',
                    layout: 'fill',
                    objectFit: 'cover',
                    className: styles.zaloDownloadIcon,
                  }}
                />
                <span>{T('zaloApp.forIOS')}</span>
              </button>
              <button
                className={styles.store}
                type='button'
                onClick={openTelioAppPlayStore}
              >
                <WrapImage
                  desktop={{
                    src: '/images/playStoreIcon.svg',
                    alt: '',
                    className: styles.zaloDownloadIcon,
                    objectFit: 'cover',
                    layout: 'fill',
                  }}
                />
                <span>{T('zaloApp.forAndroid')}</span>
              </button>
            </div>
            <div className={styles.dropdownContainer}>
              <DropDownToolTip
                options={stores}
                onClick={onStoreSelect}
                onClickOutside={hidePopup}
                id='fixedPhoneDownload'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZaloDownload;
