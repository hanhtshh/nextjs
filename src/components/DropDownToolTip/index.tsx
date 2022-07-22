/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import styles from './styles.module.css';
import { T } from '../../hooks/translation';
import { WrapImage } from '../WrapImage';

const { useEffect, useCallback, useState } = React;
type DropDownToolTipProps = {
  options: Array<object>;
  onClick: Function;
  onClickOutside: Function;
  id: string;
  customContainerStyle: any;
  down?: boolean;
};
const DropDownToolTip = (props: DropDownToolTipProps) => {
  const { options, onClick, onClickOutside, id, customContainerStyle } = props;
  const [didMount, setDidMount] = useState(false);
  const elementId = `dropDownToolTip-${id}`;

  const detectOutsideClick = useCallback(
    (event) => {
      const dropDown = document.getElementById(elementId);
      if (dropDown && !dropDown.contains(event.target)) {
        onClickOutside();
      }
    },
    [onClickOutside, elementId]
  );
  useEffect(() => {
    if (!didMount) {
      setTimeout(() => {
        setDidMount(true);
      }, 0);
      return;
    }
    window.addEventListener('click', detectOutsideClick);
    window.addEventListener('scroll', detectOutsideClick);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('click', detectOutsideClick);
      window.removeEventListener('scroll', detectOutsideClick);
    };
  }, [didMount, detectOutsideClick]);

  return (
    <div
      style={customContainerStyle}
      className={`${styles.dropDownWrappper} ${
        props.down ? '' : styles.rotate
      }`}
      id={elementId}
    >
      <div className={props.down ? '' : styles.rotate}>
        {options.map((option: any) => (
          <div
            key={option?.value}
            className={styles.dropDownOption}
            onClick={() => onClick({ target: { value: option.value } })}
          >
            <WrapImage
              desktop={{
                className: styles.dropDownIcon,
                alt: '',
                src: option.icon,
              }}
            />
            <div className={styles.dropDownLabel}>{T(option?.label)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

DropDownToolTip.defaultProps = {
  options: [],
  onClick: () => {},
  onClickOutside: () => {},
  customContainerStyle: {},
  down: true,
};

export default DropDownToolTip;
