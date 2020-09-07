import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const saved = () => {
    return (
        <div>
            <h1
                css={css`
                    background: white;
                    padding: 8px 16px;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    transition: 0.3s;
                    position: fixed;
                    bottom: 25px;
                    right: 50px;
                `}
            >
                ADDED!
            </h1>
        </div>
    );
}

export default saved;
