/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useRouter } from 'next/router';
import React, { useRef, useEffect } from 'react';
import { useWindowWidth } from '../../hooks/useWindowWidthHook';
import counterLottieVi from '../../constants/animations/counter_lottie_vi.json';
import counterLottieEn from '../../constants/animations/counter_lottie_en.json';
import counterLottieMobileVi from '../../constants/animations/counter_lottie_mobile_vi.json';
import counterLottieMobileEn from '../../constants/animations/counter_lottie_mobile_en.json';
import Lottie from 'lottie-react';
// eslint-disable-next-line max-len
import styles from './styles.module.css';
type CounterLottieProps = {
  toTop: number;
};
const CounterLottie = ({ toTop }: CounterLottieProps) => {
  const width = useWindowWidth();
  const lottieRef = useRef<any>(null);
  const { locale } = useRouter();

  const setLottieURL = (isMobile: boolean) => {
    let lottie: any = locale === 'vi' ? counterLottieVi : counterLottieEn;
    if (isMobile) {
      lottie = locale === 'vi' ? counterLottieMobileVi : counterLottieMobileEn;
    }
    return lottie;
  };
  const playLottie = () => {
    if (lottieRef.current.animationContainerRef.current) {
      let rect =
        lottieRef.current?.animationContainerRef.current.getBoundingClientRect();
      let heigth = window.innerHeight;
      if (rect.top - heigth + 200 < 0 && (lottieRef.current as any)?.play) {
        (lottieRef.current as any).setSpeed(2);
        (lottieRef.current as any).play();
      }
    }
  };
  useEffect(() => {
    if (width > 1132) {
      if (toTop >= 1 && (lottieRef.current as any)?.play) {
        setTimeout(() => {
          (lottieRef.current as any).setSpeed(2);
          (lottieRef.current as any).play();
        }, 700);
      }
    } else {
      window.addEventListener('scroll', playLottie, { passive: true });
      return () => {
        window.removeEventListener('scroll', playLottie);
      };
    }
  }, [toTop, width]);
  return (
    <>
      {width > 700 && (
        <div id='lottie-container' className={styles.counterLottieContainer}>
          <div className={styles.lottiePlayerWrapper}>
            <Lottie
              lottieRef={lottieRef}
              autoplay={false}
              loop={false}
              animationData={setLottieURL(false)}
            />
          </div>
        </div>
      )}
      {width <= 700 && (
        <div id='lottie-container' className={styles.counterLottieContainer}>
          <div className={styles.lottiePlayerWrapper}>
            <Lottie
              lottieRef={lottieRef}
              autoplay={false}
              loop={false}
              className={styles.lottie}
              animationData={setLottieURL(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(CounterLottie);
