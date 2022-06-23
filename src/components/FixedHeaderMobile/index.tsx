/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import Image from "next/image";
import { T } from "../../hooks/translation";
import MobileMenu from "../MobileMenu";
import { WrapImage } from "../WrapImage";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
const FixedHeaderMobile = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event &&
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "Shift")
    ) {
      return;
    }
    setShowDrawer(open);
  };

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // large
      "(max-width: 700px)": function () {
        // setup animations and ScrollTriggers for screens 960px wide or greater...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        const fixedHeadeMobileAnimationScroll1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".main-page-container",
            id: "fixed-header-mobile",
            scrub: true,
            endTrigger: ".main-page-container",
            end: "top -=70",
            start: "top top",
          },
        });
        fixedHeadeMobileAnimationScroll1
          .from(".fixed-header-mobile-container", {
            y: -200,
            duration: 3,
          })
          .to(".fixed-header-mobile-container", {
            position: "fixed",
            display: "flex",
            top: "2px",
            duration: 3,
            zIndex: 18,
          });
      },
    });
  }, []);

  return (
    <div
      className={`${styles.fixedHeaderMobileContainer} fixed-header-mobile-container`}
    >
      <MobileMenu
        showDrawer={showDrawer}
        toggleDrawer={toggleDrawer}
        setShowDrawer={setShowDrawer}
      />
      <WrapImage
        desktop={{
          src: "/images/Logo-Telio.png",
          alt: "telio-logo",
          layout: "fill",
          objectFit: "cover",
          className: styles.headerZaloImage,
        }}
      />

      <div
        className={styles.hiringContainer}
        onClick={() => setShowDrawer(true)}
      >
        <div>
          <span className={styles.sourceNowText}>
            {T("fixedHeaderMobile.home")}{" "}
          </span>
        </div>
        <WrapImage
          desktop={{
            src: "/images/Down.png",
            alt: "Down",
            layout: "fill",
            objectFit: "cover",
            className: styles.downImage,
          }}
        />
      </div>
    </div>
  );
};

export default FixedHeaderMobile;
