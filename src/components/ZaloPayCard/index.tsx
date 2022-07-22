import React from 'react';
import className from '../../../styles/ZaloPayInfo.module.css';
import { WrapImage } from '../WrapImage';

const ZaloPayCard = (props: any) => {
  const { imageSrc, imageAlt, title, description, description2 } = props;
  return (
    <div className={className.section}>
      <div className={className.sectionImageContainer}>
        <WrapImage
          desktop={{
            src: imageSrc,
            alt: imageAlt,
            className: className.sectionImage,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={className.sectionInfoContainer}>
        <h3 className={className.sectionTitle}>{title}</h3>
        <p className={className.sectionDescription}>{description}</p>
        <br></br>
        <p className={className.sectionDescription}>{description2}</p>
      </div>
    </div>
  );
};

export default ZaloPayCard;
