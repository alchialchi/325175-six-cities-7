import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="lds-ring" data-testid="loading-id">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
