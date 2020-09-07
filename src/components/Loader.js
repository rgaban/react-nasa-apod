import React from 'react';
import rocket from '../assets/rocket.svg';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const loader = () => {
    return (
        <div
            css={css`
                background: whitesmoke;
                height: 100vh;
                width: 100vw;
                position: fixed;
                z-index: 10;
                display: flex;
                justify-content: center;
                align-items: center;
            `}
        >
            <img src={rocket} alt="Rocket Loading Animation" />
        </div>
    );
}

export default loader;
