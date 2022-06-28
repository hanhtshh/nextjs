/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { T } from "../../hooks/translation";
import MobileMenu from "../MobileMenu";
import { WrapImage } from "../WrapImage";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
type FixedHeaderMobileProps = {
  showHeader: boolean;
};
const FixedHeaderMobile = ({ showHeader }: FixedHeaderMobileProps) => {
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
  const show = showHeader ? styles.show : "";
  return (
    <div className={`${styles.fixedHeaderMobileContainer} ${show} `}>
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
