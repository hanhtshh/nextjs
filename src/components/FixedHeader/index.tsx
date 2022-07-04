/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./styles.module.css";
import {
  openTelioAppAppStore,
  openTelioAppPlayStore,
  openTelioZalo,
} from "../../utils";
import { useRouter } from "next/router";
import { T } from "../../hooks/translation";
import DropDownToolTip from "../DropDownToolTip";
import { languages, stores, TELIO_BLOG, TELIO_CAREERS } from "../../constants";
import Image from "next/image";
import { WrapImage } from "../WrapImage";
import { useWindowWidth } from "../../hooks/useWindowWidthHook";
const onStoreSelect = (event: any) => {
  if (event.target.value === "iOS") {
    openTelioAppAppStore();
  } else {
    openTelioAppPlayStore();
  }
};

const FixedHeader = () => {
  const [isDropDownVisible, setDropDownVisible] = useState(false);
  const [isDownloadDropDownVisible, setDownloadDropDownVisible] =
    useState(false);
  const headerRef = useRef<any>(null);
  const heroTextRef = useRef<any>(null);
  const [showHeader, setShowHeader] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const handleDropDownMenu = useCallback(() => {
    setDropDownVisible(!isDropDownVisible);
  }, [isDropDownVisible]);

  const hideDropDowns = useCallback(() => {
    setDropDownVisible(false);
  }, []);
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const handleLanguageChange = useCallback((event) => {
    const { value } = event.target;
    if (locale !== value) {
      router.push({ pathname, query: query }, asPath, {
        locale: value,
      });
    }
    console.log(value);
    console.log(locale);
    setDropDownVisible(false);
  }, [locale]);

  const toggleDownloadDropDown = useCallback(() => {
    setDownloadDropDownVisible((currentValue) => !currentValue);
  }, []);
  const handleScroll = () => {
    if (heroTextRef?.current) {
      let rect = heroTextRef?.current?.getBoundingClientRect();
      if (rect.top - 100 < 0) {
        setShowHero(false);
      } else {
        setShowHero(true);
      }
    }
    if (headerRef?.current) {
      let rect = headerRef?.current?.getBoundingClientRect();
      if (rect.top - 120 < 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const show = showHeader ? styles.show : "";
  return (
    <div className={`${styles.fixedHeaderWrapper}`} ref={headerRef}>
      <div className={`${styles.fixedHeaderContainerBox} ${show}`}>
        <div className={`${styles.fixedHeaderContainer} ${show}`}>
          <span
            className={`${styles.heroSubText} ${showHero ? styles.show : ""}`}
            ref={heroTextRef}
          >
            {T("title.heroBannerSubTitle")}
          </span>
          <div className={styles.headerTelioAppsContainer}>
            <div
              className={`${styles.dropDownBarWrapper} ${show}`}
              id="drop-down-fixed-header"
            >
              <div onClick={handleDropDownMenu}>
                <WrapImage
                  desktop={{
                    src: `/images/${T("flag")}.png`,
                    alt: "language",
                    layout: "fill",
                    objectFit: "cover",
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
                    id="fixedHeaderLanguage"
                    customContainerStyle={{ minWidth: 145 }}
                  />
                )}
              </div>
            </div>
            <div
              className={styles.BuyOnZaloWrapper}
              style={{ position: "relative", height: 35 }}
              onClick={toggleDownloadDropDown}
            >
              <span className={styles.downloadAppText}>
                {T("zaloApp.download")}
              </span>
              <WrapImage
                desktop={{
                  src: "/images/Download.png",
                  alt: "zalo-logo",
                  layout: "fill",
                  objectFit: "cover",
                  className: `${styles.headerIcons} fixed-header-zalo-logos`,
                }}
              />
              <div
                className={`${styles.fixedHeaderDropDown} ${styles.fixedHeaderDownloadDropDown}`}
              >
                {isDownloadDropDownVisible && (
                  <DropDownToolTip
                    options={stores}
                    onClick={onStoreSelect}
                    onClickOutside={toggleDownloadDropDown}
                    id="fixedHeaderDownloadApp"
                  />
                )}
              </div>
            </div>
            <div className={styles.BuyOnZaloWrapper} onClick={openTelioZalo}>
              <span className={styles.buyOnZaloText}>
                {" "}
                {T("fixedHeader.telioZaloStore")}
              </span>
              <WrapImage
                desktop={{
                  src: "/images/zalo-logo.png",
                  alt: "zalo-logo",
                  layout: "fill",
                  objectFit: "cover",
                  className: `${styles.headerIcons} fixed-header-zalo-logos ${
                    showHeader ? styles.show : ""
                  }`,
                }}
              />
            </div>
          </div>
          <div className={`${styles.headerAboutTelio} ${show}`}>
            <div style={{ position: "relative" }}>
              <a
                href={TELIO_BLOG + T("link")}
                className={`${styles.headerAboutTelioText} ${styles.headerAdvantage}`}
              >
                blog
              </a>
              <div className={styles.headerAboutTelioChoose}></div>
            </div>
            <a
              className={`${styles.headerAboutTelioText} ${styles.headerAdvantage} ${styles.headerAboutTelio_flex}`}
              href={TELIO_CAREERS + T("link")}
            >
              {T("fixedHeader.careers")}
              <div className={styles.dot} />
            </a>
            <div className={styles.logoTelioBox}>
              <WrapImage
                desktop={{
                  src: "/images/Logo-Telio.png",
                  alt: "zalo-logo",
                  layout: "fill",
                  objectFit: "cover",
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
