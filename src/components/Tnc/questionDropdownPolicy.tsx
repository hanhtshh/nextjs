import React from 'react';
import classes from './bnpl.module.css';
import { WrapImage } from '../WrapImage';
type QuestionDropdownPolicyProps = {
  question: string;
  children: any;
  toggle: any;
  open?: boolean;
};
const QuestionDropdownPolicy = ({
  question,
  children,
  toggle,
  open = false,
}: QuestionDropdownPolicyProps) => {
  return (
    <div className={classes.questionDropdownContainer}>
      <div className={classes.questionContainer} onClick={toggle}>
        <div className={classes.questionContentContainer}>
          <p className={classes.questionContent} style={{ fontSize: '21px' }}>
            {question}
          </p>
        </div>
        <div className={classes.arrowContainer}>
          <WrapImage
            desktop={{
              className: classes.arrow,
              src: open ? '/images/arrow-up.svg' : '/images/arrow-down.svg',
              alt: open ? 'up' : 'down',
              layout: 'fill',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <div
        style={open ? { maxHeight: '35000px' } : {}}
        className={`${classes.answerContainer} ${
          open ? classes.answerContainerShow : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default QuestionDropdownPolicy;
