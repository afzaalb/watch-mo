import React, { Component } from "react";
import { connect } from "react-redux";
import ThemeSetting from "../../components/settings/ThemeSetting";
import MaturitySetting from "../../components/settings/MaturitySetting";

class Settings extends Component {
  render() {
    return (
      <section className="mb-4">
        <h2>Settings</h2>
        <MaturitySetting isMature={this.props.settings.adult} />
        <ThemeSetting />
      </section>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(mapStateToProps)(Settings);
