import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const navigation = props => {
    return (
        <span
            css={{
                display: 'flex',
                justifyContent: 'center',
            }}
            className={props.name}
        >
            {props.children}
        </span>
    );
}

export default navigation;
