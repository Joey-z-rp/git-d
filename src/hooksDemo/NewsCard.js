import React from 'react';

const NewsCard = ({ author, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    );
};

export default NewsCard;
