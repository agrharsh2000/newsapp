import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container">
        <h2>PandaNews</h2>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
