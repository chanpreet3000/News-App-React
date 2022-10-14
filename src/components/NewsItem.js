import React from 'react'

export default function NewsItem(props) {
    return (
        <div className='col-md-4 my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.url} className="card-img-top" alt="..." height={"160px"} />
                <div className="card-body">
                    <h5 className="card-title">{props.title != null ? props.title.slice(0, 30) : ""} ...</h5>
                    <p className="card-text">{props.description != null ? props.description.slice(0, 80) : ""} ...</p>
                    <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">More Details</a>
                </div>
            </div>
        </div>
    )
}
