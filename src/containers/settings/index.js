import React, { Component } from "react";
import { connect } from "react-redux";

class Settings extends Component {
  render() {
    return (
      <section className="mb-4">
        <h2>Settings</h2>
        <span>Adult Filter</span>
      </section>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  return { settings };
};

export default connect(mapStateToProps)(Settings);
