/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { T } from "../../hooks/translation";
import { ZALO_LINK } from "../../constants";
import { WrapImage } from "../WrapImage";
import TelioZaloApp from "../TelioZaloApp";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const PhoneCardContainer = () => {
  const [windowWidth, setWidth] = useState(0);
  const [windowHeight, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window?.innerWidth);
    setHeight(window?.innerHeight);
    ScrollTrigger.matchMedia({
      // large
      "(min-width: 700px) and (max-width: 1024px)": function () {
        // setup animations and ScrollTriggers for screens 700px wide or greater...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

        const setInitialAnimatingPositions = (
          selector: any,
          cssProperties: any
        ) => {
          gsap.set(selector, {
            ...cssProperties,
            transformOrigin: "center top",
          });
        };
        setInitialAnimatingPositions(".productCard1", { y: "500%" });
        setInitialAnimatingPositions(".zalo-phone-sku-wrapper", { y: "500%" });

        gsap.set("#value-proposition2", { x: "100%" });
        gsap.set("#value-proposition3", { x: "100%" });

        const zaloAppAnimationScroll1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".zalo-app-container",
            id: "phone-scroll-1",
            end: "top top+=100",
            start: "top bottom-=100", // when the top of the trigger hits the top of the viewport
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        });
        zaloAppAnimationScroll1
          .to(
            ".zalo-phone-sku-wrapper",
            { y: 0, scale: 1, duration: 3, ease: "Power1.easeOut" },
            "-=2"
          )
          .to(
            ".productCard",
            { y: 0, duration: 3, ease: "Power1.easeOut", stagger: 0.1 },
            "-=2"
          );

        const zaloAppAnimationScroll2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".zalo-app-container",
            start: "top top+=100",
            pin: "#phone-card",
            scrub: 1,
            endTrigger: "#fast-delivery-card",
            end: "bottom top",
          },
        });

        gsap.to("#buy-on-zalo", {
          scrollTrigger: {
            trigger: "#genuine-product-card",
            toggleActions: "play pause play reverse",
            start: "top bottom",
            endTrigger: ".zalo-app-container",
            end: "bottom bottom",
            scrub: 1,
          },
          display: "inline-flex",
        });
        gsap.to("#buy-on-zalo-content", {
          scrollTrigger: {
            trigger: "#fast-delivery-card",
            toggleActions: "play pause play reverse",
            start: "top center",
            endTrigger: "#fast-delivery-card",
            end: "top center",
          },
          marginBottom: "5rem",
        });
        gsap.to("#value-proposition2", {
          scrollTrigger: {
            trigger: "#offer-card",
            toggleActions: "play pause play reverse",
            start: "top center-=200", // when the top of the trigger hits the top of the viewport
          },
          x: 0,
          duration: 0.3,
        });

        gsap.to("#value-proposition3", {
          scrollTrigger: {
            trigger: "#fast-delivery-card",
            toggleActions: "play pause play reverse",
            start: "top center-=200", // when the top of the trigger hits the top of the viewport
          },
          x: 0,
          duration: 0.3,
        });
      },
      "(min-width: 1025px)": function () {
        // setup animations and ScrollTriggers for screens 700px wide or greater...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

        const setInitialAnimatingPositions = (
          selector: any,
          cssProperties: any
        ) => {
          gsap.set(selector, {
            ...cssProperties,
            transformOrigin: "center top",
          });
        };
        // zaloAppAnimationSetPositions.set('#offer-card', { y: '200%', transformOrigin: 'center top', },);
        setInitialAnimatingPositions(".productCard1", { y: "500%" });
        setInitialAnimatingPositions(".zalo-phone-sku-wrapper", { y: "500%" });
        gsap.set("#value-proposition2", { x: "100%" });
        gsap.set("#value-proposition3", { x: "100%" });

        const zaloAppAnimationScroll1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".zalo-app-container",
            id: "phone-scroll-1",
            end: "top top+=100",
            start: "top bottom+=200", // when the top of the trigger hits the top of the viewport
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        });
        zaloAppAnimationScroll1
          .to(
            ".zalo-phone-sku-wrapper",
            { y: 0, scale: 1, duration: 2, ease: "Power1.easeOut" },
            "-=2"
          )
          .to(
            ".productCard",
            {
              y: 0,
              scale: 1,
              duration: 3,
              ease: "Power1.easeOut",
              stagger: 0.1,
            },
            "-=2"
          );

        const zaloAppAnimationScroll2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".zalo-app-container",
            start: "top top+=50",
            pin: "#phone-card",
            scrub: 1,
            endTrigger: "#fast-delivery-card",
            end: "bottom top",
          },
        });
        gsap.to("#buy-on-zalo", {
          scrollTrigger: {
            trigger: ".zalo-app-container",
            id: "njan",
            toggleActions: "play pause play reverse",
            start: "top center",
            endTrigger: "#fast-delivery-card",
            end: "top top",
            scrub: 1,
          },
          display: "inline-flex",
        });
        gsap.to("#buy-on-zalo-content", {
          scrollTrigger: {
            trigger: "#fast-delivery-card",
            toggleActions: "play pause play reverse",
            start: "top center",
            endTrigger: "#fast-delivery-card",
            end: "top center",
          },
          marginBottom: "5rem",
        });
        gsap.to("#value-proposition2", {
          scrollTrigger: {
            trigger: "#offer-card",
            toggleActions: "play pause play reverse",
            end: "bottom top",
            start: "top+=200 center", // when the top of the trigger hits the top of the viewport
          },
          x: 0,
          duration: 0.3,
        });

        gsap.to("#value-proposition3", {
          scrollTrigger: {
            trigger: "#fast-delivery-card",
            toggleActions: "play pause play reverse",
            end: "bottom top",
            start: "top+=200 center", // when the top of the trigger hits the top of the viewport
          },
          x: 0,
          duration: 0.3,
        });
      },

      // medium
      "(max-width: 699px)": function () {
        const setInitialAnimatingPositions = (
          selector: any,
          cssProperties: any
        ) => {
          gsap.set(selector, {
            ...cssProperties,
            transformOrigin: "center top",
          });
        };
        setInitialAnimatingPositions(".zalo-phone-sku-wrapper", {
          scale: 1.3,
          y: 300,
        });
        setInitialAnimatingPositions(".productCard1", {
          y: "300%",
          scale: 1.2,
        });

        const zaloAppAnimationScroll1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".zalo-app-container",
            id: "phone-scroll-1",
            end: "top top+=300",
            start: "top bottom-=200", // when the top of the trigger hits the top of the viewport
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        });
        zaloAppAnimationScroll1.to(".zalo-phone-sku-wrapper", {
          y: 0,
          scale: 1.1,
          duration: 1,
        });

        const zaloAppAnimationScroll2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".zalo-app-container",
            id: "phone-scroll-2",
            end: "top top",
            start: "top top+=200", // when the top of the trigger hits the top of the viewport
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
        });
        zaloAppAnimationScroll2.to(".productCard", {
          y: 0,
          scale: 1,
          duration: 2,
          ease: "Power1.easeOut",
          stagger: 0.1,
        });
      },
    });
  }, []);
  return (
    <div className={styles.phoneCardContainer} id="phone-card-container">
      <div className={styles.zaloFeaturesWrapper} id="text-wrapper">
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
          style={{ top: `${windowHeight - 300}px` }}
          className={styles.fixZaloButton}
        >
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
            <span className={styles.buyOnZaloText} style={{ marginRight: 10 }}>
              {T("zaloApp.buyOnZalo")}
            </span>
          </a>
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
        className={`${styles.phoneFrameWrapper} phone-frame-wrapper`}
        id="phone-card"
      >
        <TelioZaloApp />
      </div>
    </div>
  );
};
export default PhoneCardContainer;
