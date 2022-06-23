/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { T } from "../../hooks/translation";
import { WrapImage } from "../WrapImage";

const { useEffect, useCallback, useState } = React;
type DropDownToolTipProps = {
  options: Array<object>;
  onClick: Function;
  onClickOutside: Function;
  id: string;
  customContainerStyle: any;
};
const DropDownToolTip = (props: DropDownToolTipProps) => {
  const { options, onClick, onClickOutside, id, customContainerStyle } = props;
  const [didMount, setDidMount] = useState(false);
  const elementId = `dropDownToolTip-${id}`;

  const detectOutsideClick = useCallback((event) => {
    const dropDown = document.getElementById(elementId);
    if (dropDown && !dropDown.contains(event.target)) {
      onClickOutside();
    }
  }, []);

  useEffect(() => {
    if (!didMount) {
      setTimeout(() => {
        setDidMount(true);
      }, 0);
      return;
    }
    window.addEventListener("click", detectOutsideClick);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("click", detectOutsideClick);
    };
  }, [didMount]);

  return (
    <div
      style={customContainerStyle}
      className={styles.dropDownWrappper}
      id={elementId}
    >
      {options.map((option: any) => (
        <div
          key={option?.value}
          className={styles.dropDownOption}
          onClick={() => onClick({ target: { value: option.value } })}
        >
          <WrapImage
            desktop={{
              className: styles.dropDownIcon,
              alt: "",
              src: option.icon,
            }}
          />
          <div className={styles.dropDownLabel}>{T(option?.label)}</div>
        </div>
      ))}
    </div>
  );
};

DropDownToolTip.defaultProps = {
  options: [],
  onClick: () => {},
  onClickOutside: () => {},
  customContainerStyle: {},
};

DropDownToolTip.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  onClickOutside: PropTypes.func,
  id: PropTypes.string.isRequired,
  customContainerStyle: PropTypes.shape,
};

export default DropDownToolTip;
