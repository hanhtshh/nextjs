import React, { useState, useEffect, useRef } from 'react';
import className from '../../../styles/ZaloPayInfo.module.css';

const ZaloPayInstructionLineStep = () => {
  const [positionLeft, setPositionLeft] = useState(0);
  const stepItem1 = useRef<any>(null);
  function getPositionLeft() {
    if (stepItem1.current) {
      let stepWith = stepItem1.current.offsetWidth;
      setPositionLeft(stepWith - 3);
    }
  }
  useEffect(() => {
    getPositionLeft();
  }, [positionLeft]);

  return (
    <div className={className.lineStepContainer}>
      <div
        style={{
          width: 2,
          height: 10,
          backgroundColor: '#0795FF',
          position: 'absolute',
          left: positionLeft,
          marginLeft: positionLeft / 2,
          paddingBottom: 100,
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default ZaloPayInstructionLineStep;
