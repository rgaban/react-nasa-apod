import React from 'react';
import rocket from '../assets/rocket.svg';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const loader = () => {
    return (
        <div
            css={{
                background: 'whitesmoke',
                height: '100vh',
                width: '100vw',
                position: 'fixed',
                zIndex: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img src={rocket} alt="Rocket Loading Animation" />
        </div>
    );
}

export default loader;
