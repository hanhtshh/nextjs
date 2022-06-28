/* eslint-disable no-console */
/* eslint-disable no-undef */
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useRef, useState, useEffect, Ref } from "react";
import { T } from "../../hooks/translation";
import { useWindowWidth } from "../../hooks/useWindowWidthHook";
import { WrapImage } from "../WrapImage";
import styles from "./styles.module.css";
const LottieInteractivity = require("@lottiefiles/lottie-interactivity");

const CitiesMapLottie = () => {
  const width = useWindowWidth();
  const lottieRef = useRef<any>(null);
  const [showMap, setShowMap] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(
      `https://assets5.lottiefiles.com/private_files/lf30_qbtoxcez.json?version=${Math.random()}`
    );
  }, []);
  const handleScroll = (event: any) => {
    if (lottieRef?.current) {
      let rect = lottieRef.current.getBoundingClientRect();
      if (rect.top < 0) {
        setShowMap(true);
      } else {
        setShowMap(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const title = T("citiesMap.title");
  return (
    <>
      {width && width > 700 && (
        <div id="lottie-container-map" className={styles.mapLottieContainer}>
          <div className={styles.headerContainer}>
            <span className={styles.mapHeader}>{title}</span>
          </div>
          <div className={styles.lottiePlayerWrapper} ref={lottieRef}>
            {showMap && <></>}
          </div>
        </div>
      )}

      {width && width <= 700 && (
        <div className={styles.mobileMapWrapper}>
          <div className={styles.headerContainer}>
            <span className={styles.mapHeader}>{title}</span>
          </div>
          <WrapImage
            desktop={{
              src: "/images/map-static.png",
              alt: "",
              layout: "fill",
              objectFit: "cover",
              className: styles.mapImage,
            }}
          />
        </div>
      )}
    </>
  );
};

export default CitiesMapLottie;
