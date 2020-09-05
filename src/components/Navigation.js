import React from 'react';
import Clickable from './Clickable';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const navigation = props => {
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
                >
            </span>
            <span
                css={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                id="resultsNav"
            >
                <Clickable click={props.favorites}>Favorites</Clickable>
                <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                <Clickable click={props.loadMore1}>Load More</Clickable>
            </span>
            <span className="navigations-items hidden" id="favoritesNav">
                <Clickable click={props.loadMore2}>Load More NASA Images</Clickable>
            </span>
        </div>
    );
}

export default navigation;
