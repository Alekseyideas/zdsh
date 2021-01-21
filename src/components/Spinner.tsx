import React from 'react';

interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div
      className="spinner-border text-danger"
      style={{ width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
