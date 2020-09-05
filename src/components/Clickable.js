import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const clickable = props => {
    return (
        <h3
            css={{
                color: 'dodgerblue',
                cursor: 'pointer',
                userSelect: 'none',
                '&:hover': {
                    color: 'rgb(4, 108, 212)'
                }
            }}
            onClick={props.click}
        >
            {props.children}
        </h3>
    );
}

export default clickable;
