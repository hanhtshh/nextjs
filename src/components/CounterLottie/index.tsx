/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import React, { useRef, useEffect, useCallback, useState } from "react";
import Lottie from "react-lottie-player";
import {
  COUNTER_LOTTIE_EN,
  COUNTER_LOTTIE_EN_MOBILE,
  COUNTER_LOTTIE_VI,
  COUNTER_LOTTIE_VI_MOBILE,
} from "../../constants";
import { useWindowWidth } from "../../hooks/useWindowWidthHook";
// eslint-disable-next-line max-len
import styles from "./styles.module.css";
gsap.registerPlugin(ScrollTrigger);
const CounterLottie = () => {
  const width = useWindowWidth();
  const lottieRef = useRef(null);
  const played = useRef(false);
  const { locale } = useRouter();

  const playLottie = useCallback(() => {
    if (!played.current && (lottieRef.current as any)?.play) {
      played.current = true;
      (lottieRef.current as any).play();
    }
  }, [width]);

  const setLottieURL = (isMobile: boolean) => {
    let lottie = locale === "vi" ? COUNTER_LOTTIE_VI : COUNTER_LOTTIE_EN;
    if (isMobile) {
      lottie =
        locale === "vi" ? COUNTER_LOTTIE_VI_MOBILE : COUNTER_LOTTIE_EN_MOBILE;
    }
    return `${lottie}?version=${Math.random()}`;
  };
  // useEffect(() => {
  //   (lottieRef?.current as any).addEventListener("load", () => {

  //   });
  // }, [url, width]);

  return (
    <>
      {width && width > 700 && (
        <div id="lottie-container" className={styles.counterLottieContainer}>
          <div className={styles.lottiePlayerWrapper}>
            <Player
              onEvent={(event) => {
                if (event === "load") {
                  ScrollTrigger.matchMedia({
                    "(min-width: 600px)": function () {
                      gsap.timeline({
                        scrollTrigger: {
                          trigger: "#lottie-container",
                          start: "top+=100px bottom",
                          onEnter: playLottie,
                        },
                      });
                    },
                    "(max-width: 599px)": function () {
                      gsap.timeline({
                        scrollTrigger: {
                          trigger: "#lottie-container",
                          start: "top+=130px bottom",
                          onEnter: playLottie,
                        },
                      });
                    },
                  });
                }
              }}
              id="firstLottie"
              speed={2}
              ref={lottieRef}
              keepLastFrame={true}
              src={setLottieURL(false)}
            />
          </div>
        </div>
      )}
      {width && width <= 700 && (
        <div id="lottie-container" className={styles.counterLottieContainer}>
          <div className={styles.lottiePlayerWrapper}>
            <Player
              onEvent={(event) => {
                if (event === "load") {
                  ScrollTrigger.matchMedia({
                    "(min-width: 600px)": function () {
                      gsap.timeline({
                        scrollTrigger: {
                          trigger: "#lottie-container",
                          start: "top+=100px bottom",
                          onEnter: playLottie,
                        },
                      });
                    },
                    "(max-width: 599px)": function () {
                      gsap.timeline({
                        scrollTrigger: {
                          trigger: "#lottie-container",
                          start: "top+=130px bottom",
                          onEnter: playLottie,
                        },
                      });
                    },
                  });
                }
              }}
              id="firstLottie"
              speed={2}
              ref={lottieRef}
              keepLastFrame={true}
              src={setLottieURL(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CounterLottie;
