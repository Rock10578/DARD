import React from 'react';

function NewsItem(props) {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card my-2">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger text-white" style={{zIndex: '1', left: '90%'}}>{source}</span>
            <div className="bg-image hover-overlay ripple" >
                <img id="NewsImage" src={!imageUrl?"https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/03/breaking-news-template-5-1679533775.jpg":imageUrl}  alt="Content" className="img-fluid"/>
                <a href="/"><div className="mask" style={{"backgroundColor": "rgba(251, 251, 251, 0.15)"}}></div></a>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-primary">Read More...</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem;