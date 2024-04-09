import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {

  constructor() {
    super();
    console.log("Hello I ma a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e083cc59881248dbb3b8569a32dec661";
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });

  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e083cc59881248dbb3b8569a32dec661&page=${this.state.page - 1}&pageSize-20`;
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 >Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e083cc59881248dbb3b8569a32dec661&page=${this.state.page + 1}&pageSize-20`;
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    })
  }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button
  type="button"
  disabled={this.state.page <= 1}
  class="btn btn-dark"
  onClick={this.handlePrevClick}
>
  {" "}
  &larr; Previous{" "}
</button>
          <button
            type="button"
            diabled ={(this.state.page + 1 >Math.ceil(this.state.totalResults/20))}
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}


