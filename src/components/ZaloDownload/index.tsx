/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { isIOS, isAndroid } from "react-device-detect";
import styles from "./styles.module.css";
import {
  openTelioAppAppStore,
  openTelioAppPlayStore,
  openTelioZalo,
} from "../../utils";
import { T } from "../../hooks/translation";
import DropDownToolTip from "../DropDownToolTip";
import { stores } from "../../constants";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const { useState, useCallback } = React;

// eslint-disable-next-line react/prop-types
const ZaloDownload = ({ selector }: any) => {
  const [showStores, setShowStores] = useState(false);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // large
      "(max-width: 700px)": function () {
        gsap.set("#offers-text", {
          top: "-3rem",
        });
        gsap.to("#offers-text", {
          scrollTrigger: {
            trigger: "#offers-text",
            toggleActions: "play pause play reverse",
            start: "top center+=70px",
          },
          opacity: 0,
          duration: 0.1,
        });
      },
      // small
      "(max-width: 599px)": function () {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore.
      },
    });
  }, []);

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
    if (event.target.value === "iOS") {
      openTelioAppAppStore();
    } else {
      openTelioAppPlayStore();
    }
    setShowStores(false);
  }, []);

  const hidePopup = useCallback(() => {
    setShowStores(false);
  }, []);

  return (
    <div className={`${styles.zaloDownloadContainer} ${selector}`}>
      <span className={styles.heroSubText} id="offers-text">
        {T("title.heroBannerSubTitle")}
      </span>
      <button
        type="button"
        className={`${styles.zaloDownloadSubContainer} ${styles.visitZaloContainer}`}
        onClick={openTelioZalo}
      >
        <Image
          src={"/images/zalo-logo.png"}
          alt=""
          className={styles.zaloDownloadIcon}
          height={0}
          width={0}
        />
        <span className={styles.zaloDownloadVisitZalo}>
          {T("fixedHeader.telioZaloStore")}
        </span>
      </button>
      <div
        className={`${styles.zaloDownloadSubContainer} ${styles.downloadAppContainer}`}
      >
        <button
          type="button"
          className={styles.downloadAppButton}
          onClick={onAppDownloadClick}
        >
          <Image
            height={0}
            width={0}
            src={"/images/download.svg"}
            alt=""
            className={styles.zaloDownloadIcon}
          />
          <span className={styles.zaloDownloadAppDownload}>
            {T("zaloApp.download")}
          </span>
        </button>
        {showStores && (
          <div className={styles.storesContainer}>
            <div className={styles.mobileStores}>
              <button
                className={styles.store}
                type="button"
                onClick={openTelioAppAppStore}
              >
                <Image
                  height={0}
                  width={0}
                  src={"/images/appStoreIcon.svg"}
                  alt=""
                  className={styles.zaloDownloadIcon}
                />
                <span>{T("zaloApp.forIOS")}</span>
              </button>
              <button
                className={styles.store}
                type="button"
                onClick={openTelioAppPlayStore}
              >
                <Image
                  height={0}
                  width={0}
                  src={"/images/playStoreIcon.svg"}
                  alt=""
                  className={styles.zaloDownloadIcon}
                />
                <span>{T("zaloApp.forAndroid")}</span>
              </button>
            </div>
            <div className={styles.dropdownContainer}>
              <DropDownToolTip
                options={stores}
                onClick={onStoreSelect}
                onClickOutside={hidePopup}
                id="fixedPhoneDownload"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZaloDownload;
