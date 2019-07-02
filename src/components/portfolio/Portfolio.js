import React from "react";
import "./portfolio.css";
import myImage from "../portfolio/download.jpeg";

class Portfolio extends React.Component {
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
      <div className="card">
        <div className="info-section">
          <div className="background" />
          <img className="profile" src={myImage} alt="Profile" />
          <div className="text-info">
            <h6>Front-End Developer</h6>
            <ul className="skills">
              <li>html / css</li>
              <li>Git</li>
              <li>React</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className={`navMenu ${this.state.isToggleOn ? "active" : ""}`}>
            <ul>
              <li>Projects</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>

          <div className="nav-btn" id="nav-Toggle" onClick={this.handleClick}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>

        <div className="projects">
          <h1>React :D</h1>
        </div>
      </div>
    );
  }
}

export default Portfolio;
