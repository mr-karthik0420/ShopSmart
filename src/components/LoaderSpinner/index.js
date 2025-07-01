import React from 'react';

const LoaderSpinner = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

export default LoaderSpinner;