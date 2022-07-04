/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { T } from "../../hooks/translation";
import { ZALO_LINK } from "../../constants";
import { WrapImage } from "../WrapImage";
import TelioZaloApp from "../TelioZaloApp";
const PhoneCardContainer = () => {
  const phoneCardConatinerRef = useRef<any>(null);
  const fixZaloButtonRef = useRef<any>(null);
  const [fixedCard, setFixedCard] = useState(false);
  const [fixedZaloButton, setFixedZaloButton] = useState(false);
  const handleScroll = () => {
    if (phoneCardConatinerRef.current) {
      let rect = phoneCardConatinerRef.current.getBoundingClientRect();
      if (rect.top - 150 < 0) {
        setFixedCard(true);
      } else {
        setFixedCard(false);
      }
    }
    if (fixZaloButtonRef.current) {
      let rect1 = fixZaloButtonRef.current.getBoundingClientRect();
      if (rect1.top < 0) {
        setFixedZaloButton(true);
      } else {
        setFixedZaloButton(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const show = fixedCard ? styles.show : "";
  const show1 = fixedZaloButton ? styles.show1 : "";
  console.log("re");
  return (
    <div
      className={`${styles.phoneCardContainer} ${show}`}
      ref={phoneCardConatinerRef}
      id="phone-card-container"
    >
      <div
        className={styles.zaloFeaturesWrapper}
        id="text-wrapper"
        ref={fixZaloButtonRef}
      >
        <div
          className={`${styles.phoneCardsWrapper} feature-cards-wrapper`}
          id="genuine-product-card"
          style={{ marginBottom: "0px !important" }}
        >
          <WrapImage
            desktop={{
              src: "/images/best-offer.svg",
              alt: "genuine-product-logo",
              layout: "fill",
              objectFit: "cover",
              className: styles.valueIcon,
            }}
          />
          <div className={styles.featureCardContianer}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTextWrapper}>
                <span className={styles.featureCardHeading}>
                  {T("zaloApp.exclusiveOffersText1")}
                </span>
                {/* <br /> */}
                <span className={styles.featureCardHeading}>
                  {T("zaloApp.exclusiveOffersText2")}
                </span>
                <div className={styles.featureCardText}>
                  {T("zaloApp.genuineProductsSubText")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="buy-on-zalo"
          style={{ top: `${window.innerHeight - 300}px` }}
          className={`${styles.fixZaloButton} ${show1}`}
        >
          <div className={`${styles.BuyOnZaloWrapperBox}`}>
            <a
              className={styles.BuyOnZaloWrapper}
              id="buy-on-zalo-content"
              href={ZALO_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <WrapImage
                desktop={{
                  src: "/images/zalo-logo.png",
                  alt: "zalo-logo",
                  layout: "fill",
                  objectFit: "cover",
                  className: `${styles.headerIcons} fixed-header-zalo-logos`,
                }}
              />
              <span
                className={styles.buyOnZaloText}
                style={{ marginRight: 10 }}
              >
                {T("zaloApp.buyOnZalo")}
              </span>
            </a>
          </div>
        </div>

        <div
          className={`${styles.phoneCardsWrapper} feature-cards-wrapper`}
          id="offer-card"
          style={{ marginTop: "0px !important" }}
        >
          <WrapImage
            desktop={{
              src: "/images/fast-delivery.svg",
              alt: "offer-logo",
              className: styles.valueIcon,
              layout: "fill",
              objectFit: "cover",
            }}
          />
          <div className={`${styles.featureCardContianer} feature-content`}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTextWrapper}>
                <span className={styles.featureCardHeading}>
                  {T("zaloApp.proposition2Text1")}
                </span>
                <span className={styles.featureCardHeading}>
                  {T("zaloApp.proposition2Text2")}
                </span>
                <div className={styles.featureCardText}>
                  {T("zaloApp.proposition2SubText")}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.phoneCardsWrapper} feature-cards-wrapper`}
          id="fast-delivery-card"
        >
          <WrapImage
            desktop={{
              src: "/images/cash-on-delivery.svg",
              alt: "fast-delivery-logo",
              className: styles.valueIcon,
              layout: "fill",
              objectFit: "cover",
            }}
          />
          <div className={styles.featureCardContianer}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTextWrapper}>
                <span className={styles.featureCardHeading}>
                  {T("zaloApp.proposition3Text1")}
                </span>
                <span className={styles.featureCardHeading}>
                  {T("zaloApp.proposition3Text2")}
                </span>
                <div className={styles.featureCardText}>
                  {T("zaloApp.proposition3SubText")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.phoneFrameWrapper} ${show} phone-frame-wrapper`}
        id="phone-card"
      >
        <TelioZaloApp />
      </div>
    </div>
  );
};
export default PhoneCardContainer;
