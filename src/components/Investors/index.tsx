import * as React from 'react';
import SectionTitle from '../SectionTitle';
import { WrapImage } from '../WrapImage';
import styles from './styles.module.css';

const Investors = () => (
  <div className={styles.investorsSection}>
    <SectionTitle title='investors.title' />
    <div className={styles.investorsContainer}>
      <div className={styles.investorLogoContainer}>
        <WrapImage
          desktop={{
            src: '/images/VNG-logo.png',
            alt: '',
            className: `${styles.investorLogo} ${styles.vngLogo}`,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.investorLogoContainer}>
        <WrapImage
          desktop={{
            src: '/images/investor-sequoia.png',
            alt: '',
            className: `${styles.investorLogo} ${styles.sequoiaLogo}`,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.investorLogoContainer}>
        <WrapImage
          desktop={{
            src: '/images/investor-tiger-global.png',
            alt: '',
            className: `${styles.investorLogo} ${styles.tigerGlobalLogo}`,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.breakDiv} />
      <div className={styles.investorLogoContainer}>
        <WrapImage
          desktop={{
            src: '/images/investor-rtp-global.png',
            alt: '',
            layout: 'fill',
            objectFit: 'cover',
            className: `${styles.investorLogo} ${styles.rtpGlobalLogo}`,
          }}
        />
      </div>
      <div className={styles.investorLogoContainer}>
        <WrapImage
          desktop={{
            src: '/images/investor-ggv-capital.png',
            alt: '',
            className: `${styles.investorLogo} ${styles.ggvCapitalLogo}`,
            layout: 'fill',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
    {/* <div className={`${styles.investorsContainer} ${styles.investorsContainerBottom}`}>
      <div className={styles.investorLogoContainer}>
        <StaticImage
          src="../images/investor-rtp-global.png"
          alt=""
          className={`${styles.investorLogo} ${styles.rtpGlobalLogo}`}
          placeholder="none"
        />
      </div>
      <div className={styles.investorLogoContainer}>
        <StaticImage
          src="../images/investor-ggv-capital.png"
          alt=""
          className={`${styles.investorLogo} ${styles.ggvCapitalLogo}`}
          placeholder="none"
        />
      </div>
    </div> */}
  </div>
);

export default Investors;
