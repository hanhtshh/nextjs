import * as React from "react";
import styles from "./styles.module.css";
import SectionTitle from "../SectionTitle";
import { T } from "../../hooks/translation";
import { WrapImage } from "../WrapImage";

const reviews = [
  {
    id: 1,
    userName: "review1Name",
    userLocation: "review1Location",
    userAvatar: "/images/retailer1.jpg",
    reviewText: "review1",
  },
  {
    id: 2,
    userName: "review2Name",
    userLocation: "review2Location",
    userAvatar: "/images/retailer2.jpg",
    reviewText: "review2",
  },
  {
    id: 3,
    userName: "review3Name",
    userLocation: "review3Location",
    userAvatar: "/images/retailer3.jpg",
    reviewText: "review3",
  },
];

const Reviews = () => {
  return (
    <div className={styles.reviewsSection}>
      <SectionTitle title="Reviews.title" />
      <div className={styles.reviewsContainer}>
        {reviews.map(
          ({ userName, userLocation, userAvatar, reviewText, id }) => (
            <div className={styles.reviewCardContainer} key={id}>
              <div className={styles.reviewCardUserContainer}>
                <WrapImage
                  desktop={{
                    src: userAvatar,
                    alt: "",
                    layout: "fill",
                    objectFit: "cover",
                    className: styles.reviewCardUserAvatar,
                  }}
                />
                <div className={styles.reviewCardUserDetails}>
                  <span className={styles.reviewCardUserName}>
                    {T(`Reviews.${userName}`)}
                  </span>
                  <span className={styles.reviewCardUserLocation}>
                    {T(`Reviews.${userLocation}`)}
                  </span>
                </div>
              </div>
              <div className={styles.reviewCardTextContainer}>
                <WrapImage
                  desktop={{
                    src: "/images/quotation.png",
                    alt: "",
                    className: styles.reviewCardQuotation,
                    layout: "fill",
                    objectFit: "cover",
                  }}
                />
                <span className={styles.reviewCardText}>
                  {T(`Reviews.${reviewText}`)}
                </span>
                <WrapImage
                  desktop={{
                    src: "/images/quotation.png",
                    alt: "",
                    className: `${styles.reviewCardQuotation} ${styles.reviewCardQuotationInverted}`,
                    layout: "fill",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Reviews;
