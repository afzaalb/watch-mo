import React, { Component } from "react";
import { connect } from "react-redux";

class Settings extends Component {
  render() {
    return (
      <section className="mb-4">
        <h2>Settings</h2>
        <div class="row">
          <div className="col-sm-3 text-right">Adult</div>
          <div className="col-sm-9">On</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  return { settings };
};

export default connect(mapStateToProps)(Settings);
