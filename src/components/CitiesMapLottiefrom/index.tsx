/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useRef, useState, useEffect, Ref } from 'react';
import { T } from '../../hooks/translation';
import { useWindowWidth } from '../../hooks/useWindowWidthHook';
import { WrapImage } from '../WrapImage';
import styles from './styles.module.css';
import cityMapLottie from '../../constants/animations/city_map_lottie.json';
import Lottie from 'lottie-react';

const CitiesMapLottie = ({toTop}:any) => {
  const width = useWindowWidth();
  const lottieRef = useRef<any>(null);
  const title = T('citiesMap.title');
  useEffect(() => {
    if (toTop >= 5 && (lottieRef.current as any)?.play) {
      setTimeout(() => {
        (lottieRef.current as any).play();
      }, 700);
    }
  }, [toTop]);
  return (
    <>
      {width > 700 && (
        <div id='lottie-container-map' className={styles.mapLottieContainer}>
          <div className={styles.headerContainer}>
            <span className={styles.mapHeader}>{title}</span>
          </div>
          <div className={styles.lottiePlayerWrapper} >
            <Lottie
              animationData={cityMapLottie}
              lottieRef={lottieRef}
              autoPlay={false}
              loop={false}
            />
          </div>
        </div>
      )}

      {width <= 700 && (
        <div className={styles.mobileMapWrapper}>
          <div className={styles.headerContainer}>
            <span className={styles.mapHeader}>{title}</span>
          </div>
          <WrapImage
            desktop={{
              src: '/images/map-static.png',
              alt: '',
              layout: 'fill',
              objectFit: 'cover',
              className: styles.mapImage,
            }}
          />
        </div>
      )}
    </>
  );
};

export default CitiesMapLottie;
