import React from "react";
import "./projects.css";

import ProjectsCard from "../project-cards/Project-cards";

// import Contact from "../contact/Contact";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div className="project-box">
        <ProjectsCard />
        {/* <Contact /> */}
      </div>
    );
  }
}

export default Projects;
