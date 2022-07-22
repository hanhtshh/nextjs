import React from 'react';
import className from '../../../styles/ZaloPayInfo.module.css';

const ZaloPayInstructionStep = ({
  stepNumber,
  stepDescription,
  stepItemID,
}: any) => {
  return (
    <div className={className.zaloInstructionStepItemContainer}>
      <div
        className={className.wrapZaloInstructionStepLeftItem}
        id={stepItemID}
      >
        <span className={className.leftItemContent}>{stepNumber}</span>
      </div>
      <div className={className.wrapZaloInstructionStepRightItem}>
        <span>{stepDescription}</span>
      </div>
    </div>
  );
};

export default ZaloPayInstructionStep;
