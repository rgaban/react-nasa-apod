import React from 'react';

const card = (props) => {
    return (
        <div className="card">
          <a
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={props.imgUrl}
              alt=""
              className="card-img-top"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="clickable">Add to Favorites</p>
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
