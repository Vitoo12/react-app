import React, { PureComponent } from "react";

class Content extends PureComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h1>Ini adalah Content</h1>
        <p>Halo Nama saya adalah {this.props.name()}</p>
      </div>
    );
  }
}

export default Content;
