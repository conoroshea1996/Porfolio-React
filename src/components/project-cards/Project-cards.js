import React from "react";

import "./project-cards.css";

class ProjectsCard extends React.Component {
  render() {
    let data = [
      {
        ProjectName: "first"
      },
      {
        ProjectName: "second"
      },
      {
        ProjectName: "thrid"
      },
      {
        ProjectName: "fourth"
      }
    ];
    return (
      <div className="projects">
        {data.map(function(d, id) {
          return (
            <div className="cards" key={id}>
              <div className="card-img" />
              <div className="text"> {d.ProjectName} </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectsCard;
