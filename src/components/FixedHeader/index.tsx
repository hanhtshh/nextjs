/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useEffect, useState, useCallback } from "react";
import styles from "./styles.module.css";
import {
  openTelioAppAppStore,
  openTelioAppPlayStore,
  openTelioZalo,
} from "../../utils";
import { useRouter } from "next/router";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { T } from "../../hooks/translation";
import DropDownToolTip from "../DropDownToolTip";
import { languages, stores, TELIO_BLOG, TELIO_CAREERS } from "../../constants";
import Image from "next/image";
import { WrapImage } from "../WrapImage";
import { useWindowWidth } from "../../hooks/useWindowWidthHook";
gsap.registerPlugin(ScrollTrigger);
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

  const handleDropDownMenu = useCallback(() => {
    setDropDownVisible(!isDropDownVisible);
  }, [isDropDownVisible]);

  const hideDropDowns = useCallback(() => {
    setDropDownVisible(false);
  }, []);
  const width = useWindowWidth();
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const handleLanguageChange = useCallback((event) => {
    const { value } = event.target;
    if (locale !== value) {
      router.push({ pathname, query: query }, asPath, {
        locale: value,
      });
    }
    setDropDownVisible(false);
  }, []);

  const toggleDownloadDropDown = useCallback(() => {
    setDownloadDropDownVisible((currentValue) => !currentValue);
  }, []);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // large
      "(min-width: 1400px)": function () {
        // setup animations and ScrollTriggers for screens 960px wide or greater...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        const fixedHeadeAnimationScroll1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".fixed-header-container",
            id: "fixed-header-scroll1",
            scrub: true,
            start: "top top+=50",
            end: "top top+=50",
          },
        });
        gsap.set("#offers-text", {
          top: "-2rem",
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
        fixedHeadeAnimationScroll1.to(
          ".fixed-header-container",
          {
            duration: 3,
            position: "fixed",
            marginTop: "2rem",
            zIndex: 15,
          },
          "-=3"
        );
        // const fixedHeadeAnimationScroll2 = new TimelineMax({
        //   scrollTrigger: {
        //     trigger: '.main-page-container',
        //     id: 'fixed-header-scroll2',
        //     scrub: true,
        //     endTrigger: '.main-page-container',
        //     // end: 'top top-=200',
        //     start: 'top top',
        //   },
        // },);

        const expandHeaderScrollTrigger = {
          trigger: ".main-page-container",
          start: "top top+=200",
          id: "fixed-header-scroll2",
          toggleActions: "play pause play reverse",
          end: "bottom top",
          onLeaveBack: hideDropDowns,
        };

        gsap.to(".fixed-header-container", {
          scrollTrigger: expandHeaderScrollTrigger,
          duration: 0.3,
          width: "95%",
          display:"flex"
        });

        gsap.to(".fixed-header-about-telio", {
          scrollTrigger: expandHeaderScrollTrigger,
          duration: 0.3,
          opacity: 1,
          display: "flex",
        });

        gsap.to("#drop-down-fixed-header", {
          scrollTrigger: expandHeaderScrollTrigger,
          duration: 0.3,
          display: "flex",
        });

        // fixedHeadeAnimationScroll2
        //   .to('.dummy-fixed-header', {
        //     display: 'block',
        //   }, '-=3',);
      },
      "(max-width: 1399px)": function () {
        // setup animations and ScrollTriggers for screens 960px wide or greater...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        const fixedHeadeAnimationScroll1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".fixed-header-container",
            id: "fixed-header-scroll1",
            scrub: true,
            start: "top top+=50",
            end: "top top+=50",
          },
        });
        gsap.set("#offers-text", {
          top: "-2rem",
        });
        gsap.to("#offers-text", {
          scrollTrigger: {
            trigger: "#offers-text",
            toggleActions: "play pause play reverse",
            start: "top center",
          },
          opacity: 0,
          duration: 0.1,
        });

        fixedHeadeAnimationScroll1.to(
          ".fixed-header-container",
          {
            duration: 3,
            position: "fixed",
            marginTop: "1.75rem",
            zIndex: 15,
          },
          "-=3"
        );

        const expandHeaderScrollTrigger = {
          trigger: ".main-page-container",
          start: "top top+=200",
          id: "fixed-header-scroll2",
          toggleActions: "play pause play reverse",
          end: "bottom top",
          onLeaveBack: hideDropDowns,
        };

        gsap.to(".fixed-header-container", {
          scrollTrigger: expandHeaderScrollTrigger,
          duration: 0.3,
          width: "95%",
        });

        gsap.to(".fixed-header-about-telio", {
          scrollTrigger: expandHeaderScrollTrigger,
          duration: 0.3,
          opacity: 1,
          display: "flex",
        });

        gsap.to("#drop-down-fixed-header", {
          scrollTrigger: expandHeaderScrollTrigger,
          duration: 0.3,
          display: "flex",
        });
      },
    });
  }, []);

  return (
    <div className={`${styles.fixedHeaderWrapper} fixed-header-wrapper`}>
      <div className={`${styles.fixedHeaderContainer} fixed-header-container`}>
        <div className={styles.headerTelioAppsContainer}>
          <span className={styles.heroSubText} id="offers-text">
            {T("title.heroBannerSubTitle")}
          </span>
          <div
            className={styles.dropDownBarWrapper}
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
            style={{ marginLeft: 10, position: "relative", height: 35 }}
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
            <span className={styles.buyOnZaloText} style={{ marginRight: 10 }}>
              {" "}
              {T("fixedHeader.telioZaloStore")}
            </span>
            <WrapImage
              desktop={{
                src: "/images/zalo-logo.png",
                alt: "zalo-logo",
                layout: "fill",
                objectFit: "cover",
                className: `${styles.headerIcons} fixed-header-zalo-logos`,
              }}
            />
          </div>
        </div>
        <div className={`${styles.headerAboutTelio} fixed-header-about-telio`}>
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
  );
};

export default FixedHeader;
