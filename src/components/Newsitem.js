import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props; // destructuring means we'll pull out description and title from props
    return (
      <div className = "my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://variety.com/wp-content/uploads/2016/08/reuters3201-e1536889239712.jpg?w=1000&h=563&crop=1": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsitem;
