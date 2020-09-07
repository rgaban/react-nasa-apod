import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const clickable = props => {
    return (
        <h3
            css={css`
                color: dodgerblue;
                cursor: pointer;
                user-select: none;
            `}
            onClick={props.click}
        >
            {props.children}
        </h3>
    );
}

export default clickable;
