import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      width: this.width,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
    this.width = "230px";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#F38224";
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "#D1A9FE";
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };
