import React from 'react';
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#6BEDFF" size={150} />
    </div>
  );
};

export default LoadingSpinner;
