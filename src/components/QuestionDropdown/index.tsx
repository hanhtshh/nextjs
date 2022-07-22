import React from 'react';
import classes from '../Tnc/bnpl.module.css';
import { WrapImage } from '../WrapImage';
type QuestionDropdownProps = {
  question: string;
  children: any;
  toggle: any;
  open?: boolean;
  questionRef?: any;
};
const QuestionDropdown = ({
  question,
  children,
  toggle,
  open = false,
  questionRef,
}: QuestionDropdownProps) => {
  return (
    <div className={classes.questionDropdownContainer}>
      <div
        className={classes.questionContainer}
        ref={questionRef}
        onClick={toggle}
      >
        <div className={classes.questionContentContainer}>
          <p className={classes.questionContent}>{question}</p>
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
        className={`${classes.answerContainer} ${
          open ? classes.answerContainerShow : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default QuestionDropdown;
