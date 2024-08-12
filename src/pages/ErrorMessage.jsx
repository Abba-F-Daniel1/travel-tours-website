import React from "react";

const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center py-16">
    <p className="text-red-500 mb-4">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-primary-dark text-white rounded hover:bg-primary-light transition-colors"
      >
        Retry
      </button>
    )}
  </div>
);

export default ErrorMessage;
