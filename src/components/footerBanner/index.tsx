import React from 'react';

import styles from './styles.module.css';
import { T } from '../../hooks/translation';
import { WrapImage } from '../WrapImage';

const FooterBanner = () => {
  return (
    <div id='footer-banner'>
      <div className={styles.bannerContainer}>
        <WrapImage
          desktop={{
            src: `/images/${T('image-footer')}.png`,
            alt: 'footer-banner',
            layout: 'fill',
            objectFit: 'cover',
            style: { width: '100%' },
          }}
          mobile={{
            src: `/images/${T('image-footer-mobile')}.png`,
            alt: 'footer-banner',
            layout: 'fill',
            objectFit: 'cover',
            style: { width: '100%' },
          }}
        />
      </div>
    </div>
  );
};

export default FooterBanner;
