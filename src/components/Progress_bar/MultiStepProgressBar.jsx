import React from 'react';
import './MultiStepProgressBar.css'; // Make sure to create this CSS file

const MultiStepProgressBar = ({ currentStep }) => {
  const totalSteps = 6;
  
  return (
    <div className="progress-container-main">
      {Array.from({ length: totalSteps - 1 }).map((_, index) => (
        <React.Fragment key={index}>
          <div className={`dot ${currentStep > index ? 'active' : ''}`}>
            {/* {index + 1} */}
          </div>
          <div className={`line ${currentStep > index + 1 ? 'filled' : ''}`} />
        </React.Fragment>
      ))}
      <div className={`dot ${currentStep >= totalSteps ? 'active' : ''}`}>
        {/* {totalSteps} */}
      </div>
    </div>
  );
};

export default MultiStepProgressBar;
