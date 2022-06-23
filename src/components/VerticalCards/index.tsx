import * as React from "react";
import styles from "./styles.module.css";

import Image from "next/image";
import { T } from "../../hooks/translation";
import { WrapImage } from "../WrapImage";

const VerticalCards = () => {
  return (
    <>
      <div className={styles.cardContainerWrapper} id="vertical-cards">
        <div className={styles.cardContainer} id="fmcg-card">
          <div className={styles.cardInnerWrapper}>
            <WrapImage
              desktop={{
                src: "/images/FMCG.svg",
                alt: "fmcg-icon",
                layout: "fill",
                objectFit: "cover",
                style: {
                  top: "-50px",
                  width: "140px",
                  height: "140px",
                  position: "relative",
                  display: "block",
                },
              }}
            />
            <div className={styles.cardTextWrapper}>
              <span
                className={styles.cardHeaderText}
                style={{ height: "50px" }}
              >
                {T("VerticalCards.FMCG")}
              </span>
              <div className={styles.cardText}>{T("message.FMCG")}</div>
            </div>
            <div className={styles.cardIconWrapper}>
              <WrapImage
                desktop={{
                  src: "/images/FMCG-Logos.png",
                  alt: "FMCG-Logos",
                  layout: "fill",
                  objectFit: "cover",
                  className: styles.cardIconWrapperImage,
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.cardContainer} id="pharmacy-card">
          <div className={styles.cardInnerWrapper}>
            <div className={styles.pharmacyImageWrapper}>
              <WrapImage
                desktop={{
                  src: "/images/lifestyle.svg",
                  alt: "Lifestyle-icon",
                  style: {
                    top: "-50px",
                    width: "140px",
                    height: "140px",
                    position: "relative",
                  },
                  layout: "fill",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.cardTextWrapper}>
              <div className={styles.cardHeaderWrapper}>
                <span className={styles.cardHeaderText}>
                  {T("VerticalCards.LIFESTYLE")}
                </span>
              </div>
              <div className={styles.cardText}>{T("message.Lifestyle")}</div>
            </div>
            <div className={styles.cardIconWrapper}>
              <WrapImage
                desktop={{
                  src: "/images/lifestyle-logo.png",
                  alt: "Healthcare-Logos",
                  layout: "fill",
                  objectFit: "cover",
                  className: styles.cardIconWrapperImage,
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.cardContainer} id="pharmacy-card">
          <div className={styles.cardInnerWrapper}>
            <div className={styles.pharmacyImageWrapper}>
              <WrapImage
                desktop={{
                  src: "/images/Pharmacy.svg",
                  alt: "pharmacy-icon",
                  style: {
                    top: "-50px",
                    width: "140px",
                    height: "140px",
                    position: "relative",
                  },
                  layout: "fill",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.cardTextWrapper}>
              <div className={styles.cardHeaderWrapper}>
                <span className={styles.cardHeaderText}>
                  {T("VerticalCards.PHARMACEUTICAL")}
                </span>
              </div>
              <div className={styles.cardText}>{T("message.Pharmacy")}</div>
            </div>
            <div className={styles.cardIconWrapper}>
              <WrapImage
                desktop={{
                  src: "/images/Healthcare-logo.png",
                  alt: "Healthcare-Logos",
                  layout: "fill",
                  objectFit: "cover",
                  className: styles.cardIconWrapperImage,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalCards;
