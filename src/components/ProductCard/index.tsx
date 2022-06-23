/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import * as React from "react";
import { WrapImage } from "../WrapImage";

import styles from "./styles.module.css";

const ProductCard = () => {
  const { locale } = useRouter();

  const isVietnamese = locale === "vi";

  return (
    <>
      <div className={`${styles.productCardWrapper}  productCard1 productCard`}>
        <WrapImage
          desktop={{
            src: isVietnamese
              ? "/images/value1-sku1-vi.png"
              : "/images/value1-sku1-en.png",
            alt: "",
            className: `${styles.zaloSkuImages}`,
            layout: "fill",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className={`${styles.productCardWrapper}  productCard1 productCard`}
        style={{ bottom: 15 }}
      >
        <WrapImage
          desktop={{
            src: isVietnamese
              ? "/images/value1-sku2-vi.png"
              : "/images/value1-sku2-en.png",
            alt: "",
            className: `${styles.zaloSkuImages}`,
            layout: "fill",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
};
export default ProductCard;
