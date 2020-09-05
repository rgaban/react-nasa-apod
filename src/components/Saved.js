import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const saved = props => {
    return (
        <div>
            <h1
                css={{
                    background: 'white',
                    padding: '8px 16px',
                    borderRadius: '5px',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                    transition: '0.3s',
                    position: 'fixed',
                    bottom: '25px',
                    right: '50px',
                }}
            >
                ADDED!
            </h1>
        </div>
    );
}

export default saved;
