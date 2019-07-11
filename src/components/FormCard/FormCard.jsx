import React from "react";
import "./FormCard.css";

class FormCard extends React.Component {
  render() {

    const {title, no, count, children, onClick} = this.props;
    return (
      <div className="FormCard">
        <h3>{title}</h3>
        <p className="left-corner"><span className="w3-badge-little">Form {no}</span></p>
        <p className="right-corner">Submissions: <span className="w3-badge">{count}</span></p>
        <button className="btnMaterial" onClick={onClick}>Details</button>
        {children}
      </div>
    );
  }
}

export default FormCard;
