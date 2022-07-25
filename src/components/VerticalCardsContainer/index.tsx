import * as React from 'react';
import { T } from '../../hooks/translation';
import VerticalCards from '../VerticalCards';
import styles from './styles.module.css';

const VerticalCardsContainer = () => {
  return (
    <div
      className={styles.verticalCardsContainer}
      id='vertical-cards-container'
    >
      {/* <div className={`${styles.oneshopTitleWrapper} one-shop-title-wrapper`}>
        <span className={styles.verticalCardsContainerHeader}>
          {T('verticals.title')}
        </span>
      </div> */}
      <VerticalCards />
    </div>
  );
};

export default VerticalCardsContainer;
