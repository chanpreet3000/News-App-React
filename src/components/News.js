import NewsItem from './NewsItem'
// import data from '../sample.json'

import React, { Component } from 'react'
import Spinner from './Spinner';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            pageNumber: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        this.setState({
            loading: true
        });
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=766e74ae42fb4168b1e4a8c375988bfd&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    previousBtnHandler = async () => {
        this.setState({
            loading: true
        });
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=766e74ae42fb4168b1e4a8c375988bfd&page=${this.state.pageNumber - 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            pageNumber: this.state.pageNumber - 1,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    nextBtnHandler = async () => {
        this.setState({
            loading: true
        });
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=766e74ae42fb4168b1e4a8c375988bfd&page=${this.state.pageNumber + 1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            pageNumber: this.state.pageNumber + 1,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Daily Dose of Nothing.</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((element) => {
                            return <NewsItem key={element.url} url={element.urlToImage} title={element.title} description={element.description} newsUrl={element.url} />;
                        })
                    }
                </div>
                <div class="d-flex justify-content-between">
                    <button disabled={this.state.loading || this.state.pageNumber <= 1} className="btn btn-primary" onClick={this.previousBtnHandler}>&laquo; Previous</button>
                    <button disabled={this.state.loading || (this.state.pageNumber - 1) * this.props.pageSize + this.state.articles.length === this.state.totalResults} className="btn btn-primary" onClick={this.nextBtnHandler}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}