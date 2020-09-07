import React from 'react';

/** @jsx jsx */
import { jsx, css} from '@emotion/core';

const navigationContainer = props => {
    return (
        <div
            css={css`
                position: fixed;
                top: 0
            `}
        >
        <span
            css={css`
                background: whitesmoke;
                position: fixed;
                right: 0;
                width: 100%;
                height: 60px;
                z-index: -1;
            `}
        ></span>
            {props.children}
        </div>
    );
}

export default navigationContainer;
