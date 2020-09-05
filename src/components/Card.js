import React from 'react';

/** @jsx jsx */
import { jsx } from '@emotion/core';

const card = props => {
    return (
        <div
          css={{
            background: 'white',
            margin: '10px 10px 20px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            ':hover': {
              boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
            }
          }}
        >
          <a
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              css={{
                width: '100%',
                height: 'auto',
                borderRadius: '5px 5px 0 0'
              }}
              src={props.imgUrl}
              alt=""
            />
          </a>
          <div css={{padding: '20px'}}>
            <h5
              css={{
                margin: '10px auto',
                fontSize: '24px'
              }}
            >{props.title}</h5>
            <p
              css={{
                color: 'dodgerblue',
                cursor: 'pointer',
                userSelect: 'none',
                '&:hover': {
                  color: 'rgb(4, 108, 212)'
                }
              }}
              onClick={props.addToFavorites}
            >
              {props.favoritesClick}
            </p>
            <p className="card-text">{props.explanation}</p>
            <small className="text-muted">
              <strong>{props.date}</strong>
              <span>{props.copyright}</span>
            </small>
          </div>
        </div>
    );
}

export default card;
