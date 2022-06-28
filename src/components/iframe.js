import React from 'react';
import PropTypes from 'prop-types';
import './iframe.css'
const Iframe = ({ source }) => {

    if (!source) {
        return <div className="text-white text-2xl">Loading...</div>;
    }

    const src = source;     
    return (
        <div className="frame">
            <div className="frame">
                <iframe className="frame" src={src}></iframe>
            </div>
        </div>
    );
};

Iframe.propTypes = {
  source: PropTypes.any,
};

export default Iframe;