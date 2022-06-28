/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  COUNTER_LOTTIE_EN,
  COUNTER_LOTTIE_EN_MOBILE,
  COUNTER_LOTTIE_VI,
  COUNTER_LOTTIE_VI_MOBILE,
} from "../../constants";
import { useWindowWidth } from "../../hooks/useWindowWidthHook";
import PlayerCustom from "../PlayerCustom";
// eslint-disable-next-line max-len
import styles from "./styles.module.css";
const CounterLottie = () => {
  const width = useWindowWidth();
  const lottieRef = useRef<any>(null);
  const played = useRef(false);
  const { locale } = useRouter();

  const playLottie = () => {
    let rect = lottieRef.current?.container.getBoundingClientRect();
    let heigth = window.innerHeight;
    if (
      rect.top - heigth + 200 < 0 &&
      !played.current &&
      (lottieRef.current as any)?.play
    ) {
      played.current = true;
      (lottieRef.current as any).play();
      window.removeEventListener("scroll", playLottie);
    }
  };

  const setLottieURL = (isMobile: boolean) => {
    let lottie = locale === "vi" ? COUNTER_LOTTIE_VI : COUNTER_LOTTIE_EN;
    if (isMobile) {
      lottie =
        locale === "vi" ? COUNTER_LOTTIE_VI_MOBILE : COUNTER_LOTTIE_EN_MOBILE;
    }
    return `${lottie}?version=${isMobile ? 1 : 0.5}`;
  };
  useEffect(() => {
    window.addEventListener("scroll", playLottie, { passive: true });
    return () => {
      window.removeEventListener("scroll", playLottie);
    };
  }, []);
  console.log("render");
  return (
    <>
      {width && width > 700 && (
        <div id="lottie-container" className={styles.counterLottieContainer}>
          <div className={styles.lottiePlayerWrapper}>
            <PlayerCustom
              id="firstLottie"
              speed={2}
              ref={lottieRef}
              keepLastFrame={true}
              renderer={false}
              src={setLottieURL(false)}
            />
          </div>
        </div>
      )}
      {width && width <= 700 && (
        <div id="lottie-container" className={styles.counterLottieContainer}>
          <div className={styles.lottiePlayerWrapper}>
            <PlayerCustom
              id="firstLottie"
              speed={2}
              ref={lottieRef}
              keepLastFrame={true}
              renderer={false}
              src={setLottieURL(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(CounterLottie);
