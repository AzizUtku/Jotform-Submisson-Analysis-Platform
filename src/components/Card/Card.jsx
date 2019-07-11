import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
