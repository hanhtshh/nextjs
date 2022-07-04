import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { WrapImage } from "../WrapImage";
import ProductCard from "../ProductCard";
import { useWindowWidth } from "../../hooks/useWindowWidthHook";
type TelioZaloAppProps = {
  image1Show: boolean;
  image2Show: boolean;
  fixedCard: boolean;
};
const TelioZaloApp = ({
  image1Show,
  image2Show,
  fixedCard,
}: TelioZaloAppProps) => {
  const { locale } = useRouter();
  const width = useWindowWidth();
  const isVietnamese = locale === "vi";
  const show1 = image1Show ? styles.show : "";
  const show2 = image2Show ? styles.show : "";
  return (
    <div
      style={{ zoom: `${width / 1700}` }}
      className={`${styles.zaloAppWrapper} zalo-phone-wrapper`}
    >
      <div className={styles.zaloContainer}>
        <div
          className={styles.zaloValuePropositionImageWrapper}
          id="value-proposition1"
        >
          <div className={styles.zaloWrapper}>
            <div className={styles.productSkuWrapperBox}>
              <WrapImage
                desktop={{
                  src: isVietnamese
                    ? "/images/value1-banner-vi.png"
                    : "/images/value1-banner-en.png",
                  alt: "",
                  className: `${styles.productSkuWrapper} zalo-phone-sku-wrapper`,
                  layout: "fill",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.productCards}>
              <ProductCard fixedCard={fixedCard} />
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
              className: `${styles.mobileFrame} ${show1}`,
              layout: "fill",
              objectFit: "cover",
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
              className: `${styles.mobileFrame} ${show2}`,
              layout: "fill",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TelioZaloApp);
