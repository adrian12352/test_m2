import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.animals.map((animal, index) => (
          <div key={index}>
            <h5>{animal.name}</h5>
            <img
              src={animal.image}
              alt={animal.name}
              style={{ width: "300px" }}
            />
            <br />
            <span>{animal.species}</span>
          </div>
        ))}
      </div>
    );
  }
}
