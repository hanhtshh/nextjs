import React from 'react';
import {
  DELIVERY_POLICY,
  MESSENGER_LINK,
  PAYMENT_POLICY,
  RETAILERS_POLICY,
  RETURNING_POLICY,
  SECURITY_POLICY,
  ZALO_LINK,
  TELIO_CERTIFIED_GOV_LINK1,
  TELIO_CERTIFIED_GOV_LINK2,
} from '../../constants';
import styles from './styles.module.css';
import { T } from '../../hooks/translation';
import { WrapImage } from '../WrapImage';

const Footer = () => {
  return (
    <div className={styles.footerContainer} id='footer'>
      <div className={styles.footerLeftWrapper}>
        <div>
          <WrapImage
            desktop={{
              src: '/images/telio-logo.png',
              alt: 'telio-logo',
              width: 80,
              height: 40,
              style: { width: 80, height: 40 },
            }}
          />
        </div>
        <div className={styles.footerTopWrapper}>
          <div className={styles.footerText}>
            <div>{T('Footer.office')}</div>
            <div>{T('Footer.address')}</div>
            <div>{T('Footer.hotline')}</div>
            <div>
              Email:{' '}
              <a href='mailto: hotro@telio.vn' className={styles.email}>
                hotro@telio.vn
              </a>
            </div>
            <div>{T('Footer.rights')}</div>
          </div>
        </div>
      </div>
      <div className={styles.footerRightWrapper}>
        <div className={styles.footerInnerWrapper}>
          <div className={styles.footerText}>
            <div>
              <a
                className={styles.links}
                href={PAYMENT_POLICY}
                target='_blank'
                rel='noreferrer'
              >
                {T('Footer.paymentPolicy')}
              </a>
            </div>
            <div>
              <a
                className={styles.links}
                href={DELIVERY_POLICY}
                target='_blank'
                rel='noreferrer'
              >
                {T('Footer.deliveryPolicy')}
              </a>
            </div>
            <div>
              <a
                className={styles.links}
                href={RETURNING_POLICY}
                target='_blank'
                rel='noreferrer'
              >
                {T('Footer.returnPolicy')}
              </a>
            </div>
            <div>
              <a
                className={styles.links}
                href={RETAILERS_POLICY}
                target='_blank'
                rel='noreferrer'
              >
                {T('Footer.vendorPolicy')}
              </a>
            </div>
            <div>
              <a
                className={styles.links}
                href={SECURITY_POLICY}
                target='_blank'
                rel='noreferrer'
              >
                {T('Footer.privacyPolicy')}
              </a>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <a href={ZALO_LINK} target='_blank' rel='noreferrer'>
              <WrapImage
                desktop={{
                  src: '/images/zalo-logo.png',
                  alt: 'zalo-logo',
                  width: 24,
                  height: 24,
                  className: `${styles.links}`,
                  style: { width: 24, height: 24, marginRight: 16 },
                }}
              />
            </a>
            <a href={MESSENGER_LINK} target='_blank' rel='noreferrer'>
              <WrapImage
                desktop={{
                  src: '/images/messenger-logo.png',
                  alt: 'messenger-logo',
                  width: 24,
                  height: 24,
                  style: { width: 24, height: 24 },
                }}
              />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <a href={TELIO_CERTIFIED_GOV_LINK1} target='_blank' rel='noreferrer'>
            <WrapImage
              desktop={{
                src: '/images/online-gov-home.png',
                alt: 'online-gov-home-logo',
                width: 120,
                height: 46,
                style: { width: 120 },
              }}
            />
          </a>
          <a href={TELIO_CERTIFIED_GOV_LINK2} target='_blank' rel='noreferrer'>
            <WrapImage
              desktop={{
                src: '/images/online-gov-telio.png',
                alt: 'online-gov-telio-logo',
                width: 120,
                height: 46,
                style: { width: 120 },
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
