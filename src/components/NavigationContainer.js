import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const navigationContainer = props => {
    return (
        <div
            css={{
                position: 'fixed',
                top: 0
            }}
        >
        <span
            css={{
                background: 'whitesmoke',
                position: 'fixed',
                right: 0,
                width: '100%',
                height: '60px',
                zIndex: -1,
            }}
        ></span>
            {props.children}
        </div>
    );
}

export default navigationContainer;
