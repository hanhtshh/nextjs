import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { WrapImage } from "../WrapImage";
import ProductCard from "../ProductCard";

const TelioZaloApp = () => {
  const { locale } = useRouter();
  const isVietnamese = locale === "vi";
  return (
    <div className={`${styles.zaloAppWrapper} zalo-phone-wrapper`}>
      <div className={styles.zaloContainer}>
        <div
          className={styles.zaloValuePropositionImageWrapper}
          id="value-proposition1"
        >
          <div className={styles.zaloWrapper}>
            <WrapImage
              desktop={{
                src: isVietnamese
                  ? "/images/value1-banner-vi.png"
                  : "/images/value1-banner-en.png",
                alt: "",
                className: `${styles.productSkuWrapper} zalo-phone-sku-wrapper`,
                layout:"fill",
                objectFit:"cover"
              }}
            />
            <div className={styles.productCards}>
              <ProductCard />
            </div>
          </div>
        </div>
        <div
          className={`${styles.zaloValuePropositionImageWrapper} ${styles.values}`}
          id="value-proposition2"
        >
          <WrapImage
            desktop={{
              src: isVietnamese
                ? "/images/value2-vi.png"
                : "/images/value2-en.png",
              alt: "phone-frame",
              className: styles.mobileFrame,
              layout:"fill",
              objectFit:"cover"
            }}
          />
        </div>
        <div
          className={`${styles.zaloValuePropositionImageWrapper} ${styles.values}`}
          id="value-proposition3"
        >
          <WrapImage
            desktop={{
              src: "/images/value3.png",
              alt: "phone-frame",
              className: styles.mobileFrame,
              layout:"fill",
              objectFit:"cover"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TelioZaloApp;
