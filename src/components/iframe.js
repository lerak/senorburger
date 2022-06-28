import React from 'react';
import PropTypes from 'prop-types';
import "./iframe.module.css"
function Iframe  ({ source }) {

    if (!source) {
        return <div className="text-black text-2xl">Cargando...</div>;
    }

    const src = source;     
    return (
        <div className="html body div">
            <div className="frame">
                <iframe className="frame" src={src}></iframe>
            </div>
        </div>
    );
}

Iframe.propTypes = {
  source: PropTypes.any,
};

export default Iframe;