import React from 'react';
import classes from '../styles/ZaloPayInfo.module.css';
import { WrapImage } from '../src/components/WrapImage';
import { T } from '../src/hooks/translation';
import ZaloPayCard from '../src/components/ZaloPayCard';
import ZaloPayInstructionLineStep from '../src/components/ZaloPayInstructionLineStep';
import ZaloPayInstructionStep from '../src/components/ZaloPayInstructionStep';
import Seo from '../src/components/Seo';
const ZaloPayInfo = () => {
  const zaloPayLogo = '/images/zalopay-logo.png';
  const zaloPaySwitch = '/images/zalopay-switch.png';
  const zaloPayBenefits = '/images/zalopay-benefits.png';
  return (
    <div className={classes.container}>
      <Seo title='Giới thiệu' />
      <WrapImage
        desktop={{
          src: '/images/zalopay-intro.png',
          alt: 'zalopay-intro',
          className: classes.thumbnail,
          layout: 'fill',
          objectFit: 'cover',
        }}
      />
      <div className={classes.section}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>{T('zaloPay.intro')}</h1>
        </div>
      </div>
      <ZaloPayCard
        imageSrc={zaloPayLogo}
        imageAlt='zalopay-logo'
        title={T('zaloPay.paymentTitle')}
        description={T('zaloPay.paymentDescription1')}
        description2={T('zaloPay.paymentDescription2')}
      />
      <ZaloPayCard
        imageSrc={zaloPaySwitch}
        imageAlt='zalopay-switch'
        title={T('zaloPay.switchTitle')}
        description={T('zaloPay.switchDescription')}
      />
      <ZaloPayCard
        imageSrc={zaloPayBenefits}
        imageAlt='zalopay-benefits'
        title={T('zaloPay.benefitsTitle')}
        description={T('zaloPay.benefitsDescription')}
      />
      <div
        className={classes.section}
        style={{ border: 'none', paddingBottom: 0 }}
      >
        <div className={classes.sectionImageContainer}>
          <WrapImage
            desktop={{
              src: '/images/ZaloPayUserManual.png',
              alt: 'calendar',
              className: classes.sectionImage,
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className={classes.sectionInfoContainer}>
          <h3 className={classes.sectionTitle}>
            {T('zaloPay.instructionTitle')}
          </h3>
          <div className={classes.zaloInstructionStepContainer}>
            <ZaloPayInstructionStep
              stepNumber='1'
              stepDescription={T('zaloPay.instruction1')}
              stepItemID='stepItem1'
            />
            <ZaloPayInstructionLineStep />
            <ZaloPayInstructionStep
              stepNumber='2'
              stepDescription={T('zaloPay.instruction2')}
            />
            <ZaloPayInstructionLineStep />
            <ZaloPayInstructionStep
              stepNumber='3'
              stepDescription={T('zaloPay.instruction3')}
            />
            <ZaloPayInstructionLineStep />
            <ZaloPayInstructionStep
              stepNumber='4'
              stepDescription={T('zaloPay.instruction4')}
            />
          </div>
        </div>
      </div>
      <div className={classes.actionContainer}>
        <a className={classes.hotlineCall} href='tel:18006751'>
          <button className={classes.invertButton}>
            <span className={classes.invertButtonText}>Liên hệ Hotline</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ZaloPayInfo;
