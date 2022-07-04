/* eslint-disable no-undef */
import * as React from "react";
import { isChrome, isEdge, isWindows, isMacOs } from "react-device-detect";

import styles from "./styles.module.css";
import Image from "next/image";
import CounterLottie from "../CounterLottie";
import SectionTitle from "../SectionTitle";
import { WrapImage } from "../WrapImage";

const Products = () => {
  const productRef = React.useRef<any>(null);
  const [showProduct, setShowProduct] = React.useState(false);
  const handleScroll = (event: any) => {
    if (productRef?.current) {
      let height = window.innerHeight;
      let rect = productRef.current.getBoundingClientRect();
      if (rect.top - height / 2  < 0) {
        setShowProduct(true);
        //  window.removeEventListener("scroll", handleScroll);
      } else {
        setShowProduct(false);
      }
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.productsContainer} id="productsContainer">
      <div className={styles.productsHeader}>
        {/* <SectionTitle title="products.title" /> */}
      </div>
      <CounterLottie />
      <div className={styles.productsAnimateContainer} ref={productRef}>
        <WrapImage
          desktop={{
            src: "/images/products1.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            className: showProduct
              ? `${styles.products} ${styles.product1} ${styles.show}`
              : `${styles.products} ${styles.product1}`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/products2.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products2",
            className: showProduct
              ? `${styles.products} ${styles.product2}  ${styles.show}`
              : `${styles.products} ${styles.product2}`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/products3.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products3",
            className: showProduct
              ? `${styles.products} ${styles.product3} ${styles.show}`
              : `${styles.products} ${styles.product3}`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/products4.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products4",
            className: showProduct
              ? `${styles.products} ${styles.product4} ${styles.show}`
              : `${styles.products} ${styles.product4}`,
          }}
        />

        {/* <WrapImage
          desktop={{
            src: "/images/allProducts.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "allProducts",
            className: showProduct
              ? `${styles.products} ${styles.allProducts} ${styles.show}`
              : `${styles.products} ${styles.allProducts}`,
          }}
        /> */}
      </div>
    </div>
  );
};

export default Products;
