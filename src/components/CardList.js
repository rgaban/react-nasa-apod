import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const cardList = props => {
    return (
        <div
            css={css`
                width: 800px;
                margin-top: 50px;
                @media screen and (max-width: 800px) {
                    width: 100%;
                }
            `}
        >
            {props.children}
        </div>
    );

}

export default cardList;
