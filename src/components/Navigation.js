import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const navigation = props => {
    return (
        <span
            css={css`
                display: flex;
                justify-content: center;
            `}
            className={props.name}
        >
            {props.children}
        </span>
    );
}

export default navigation;
