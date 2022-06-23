/* eslint-disable no-undef */
import * as React from "react";
import { isChrome, isEdge, isWindows, isMacOs } from "react-device-detect";

import styles from "./styles.module.css";
import Image from "next/image";
import CounterLottie from "../CounterLottie";
import SectionTitle from "../SectionTitle";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { WrapImage } from "../WrapImage";
gsap.registerPlugin(ScrollTrigger);
const { useCallback } = React;

const Products = () => {
  const scaleFrom = useCallback((tween, id, scale, duration = 20) => {
    tween.from(
      id,
      {
        scale,
        ease: "none",
        duration,
      },
      "<"
    );
  }, []);

  const moveFrom = useCallback((tween, id, blur = 0, y = 0, duration = 20) => {
    tween.from(
      id,
      {
        y,
        filter: `blur(${blur}px)`,
        ease: "none",
        duration,
      },
      "<"
    );
  }, []);

  const hideImage = useCallback((tween, id) => {
    tween.to(
      id,
      {
        display: "none",
        opacity: 0,
      },
      "+=0.2"
    );
  }, []);

  const setScale = useCallback((item, scale = 1) => {
    gsap.set(item, {
      transform: `scale(${scale})`,
    });
  }, []);

  React.useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 600px)": function () {
        gsap.set(".products", {
          width: "89%",
          transform: "scale(1)",
          filter: "blur(0px)",
        });
        gsap.set("#productImagesContainer", {
          width: "100%",
          transform: "scale(1)",
        });
        setScale("#lottie-container", 1);
        const productsAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#productsContainer",
            start: "top+=20% bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });
        if (!((isMacOs || isWindows) && (isChrome || isEdge))) {
          scaleFrom(productsAnimation, "#lottie-container", 2);
          scaleFrom(productsAnimation, "#productImagesContainer", 2);
        }
        moveFrom(productsAnimation, "#products1", 5, 800);
        moveFrom(productsAnimation, "#products2", 10, 400);
        moveFrom(productsAnimation, "#products3", 15, 200);
        moveFrom(productsAnimation, "#products4", 20, 100);
        productsAnimation.to("#allProducts", {
          opacity: 1,
          duration: 0.2,
        });
        hideImage(productsAnimation, "#products1");
        hideImage(productsAnimation, "#products2");
        hideImage(productsAnimation, "#products3");
        hideImage(productsAnimation, "#products4");
      },
      "(max-width: 599px)": function () {
        gsap.set(".products", {
          width: "89%",
          transform: "scale(1)",
          filter: "blur(0px)",
        });
        gsap.set("#productImagesContainer", {
          width: "100%",
          transform: "scale(1.2)",
        });
        setScale("#lottie-container", 1);
        const mobileProductsAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#productsContainer",
            start: "top+=45% bottom",
            end: "bottom+=50% bottom",
            scrub: 1,
          },
        });
        if (!((isMacOs || isWindows) && (isChrome || isEdge))) {
          scaleFrom(mobileProductsAnimation, "#lottie-container", 1.4, 10);
          scaleFrom(mobileProductsAnimation, "#productImagesContainer", 2, 10);
        }
        moveFrom(mobileProductsAnimation, "#products1", 5, 300, 10);
        moveFrom(mobileProductsAnimation, "#products2", 10, 200, 10);
        moveFrom(mobileProductsAnimation, "#products3", 15, 100, 10);
        moveFrom(mobileProductsAnimation, "#products4", 20, 50, 10);
        mobileProductsAnimation.to("#allProducts", {
          opacity: 1,
          duration: 0.2,
        });
        hideImage(mobileProductsAnimation, "#products1");
        hideImage(mobileProductsAnimation, "#products2");
        hideImage(mobileProductsAnimation, "#products3");
        hideImage(mobileProductsAnimation, "#products4");
      },
    });
  }, []);
  return (
    <div className={styles.productsContainer} id="productsContainer">
      <div className={styles.productsHeader}>
        <SectionTitle title="products.title" />
      </div>
      <CounterLottie />
      <div
        className={styles.productsAnimateContainer}
        id="productImagesContainer"
      >
        <WrapImage
          desktop={{
            src: "/images/products1.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products1",
            className: `${styles.products} ${styles.product1} products`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/products2.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products2",
            className: `${styles.products} ${styles.product2} products`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/products3.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products3",
            className: `${styles.products} ${styles.product3} products`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/products4.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "products4",
            className: `${styles.products} ${styles.product4} products`,
          }}
        />

        <WrapImage
          desktop={{
            src: "/images/allProducts.png",
            alt: "",
            layout: "fill",
            objectFit: "cover",
            id: "allProducts",
            className: `${styles.products} ${styles.allProducts} products`,
          }}
        />
      </div>
    </div>
  );
};

export default Products;
