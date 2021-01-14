import React from 'react';
import "./Articles.css"

const Article = ({ result }) => {

    const timeStamp = () => {
        const m = result.published_date.slice(5,7)
        const months = ['January', 'February', 'march', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novmber', 'December']
        const time = result.published_date.slice(11, 16)
        return months[parseInt(m-1)] + " | " + time
    }

    return (
        <div className="article">
            <a href={result.url} target="_blank">
                <img className="article__image" src={result.thumbnail_standard} alt="article__image" />
            </a>
            <div className="text">
                <p className="material-type">{result.material_type_facet}</p>
                <a className="title" href={result.url} target="_blank">
                    <p>{result.title}</p>
                </a>
                <p className="publish-date">{timeStamp()}</p>
                <p className="publish-date">Watch on </p>
                <div className="article-footer">
                    price
                    <i className="far fa-heart"></i>
                </div>
            </div>
        </div>
    )
}

export default Article