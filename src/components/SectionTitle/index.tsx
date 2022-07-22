import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { T } from '../../hooks/translation';

const SectionTitle = ({ title, text, subTitleColor }: any) => {
  return (
    <>
      <span className={styles.sectionTitle}>{T(title)}</span>
      <span className={styles.sectionText} style={{ color: subTitleColor }}>
        {text ? T(text) : ''}
      </span>
    </>
  );
};

SectionTitle.defaultProps = {
  text: null,
  subTitleColor: '#646B72',
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  subTitleColor: PropTypes.string,
};

export default SectionTitle;
