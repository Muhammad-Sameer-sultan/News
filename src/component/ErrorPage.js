// ErrorPage.js

import React from 'react';

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="error-container container">
      <div className="error-content bg-light p-4 mt-5 rounded">
        <h1 className="error-code display-1 text-danger">{errorCode}</h1>
        <p className="error-message lead">{errorMessage}</p>
        <p className="back-to-home">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </p>
      </div>
    </div>
  );
};

ErrorPage.defaultProps = {
  errorCode: '500',
  errorMessage: 'Oops! Something went wrong.',
};

export default ErrorPage;
