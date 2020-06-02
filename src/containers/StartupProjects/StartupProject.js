import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="achievement-cards-div">
            {bigProjects.projects.map(card => {
              return (
                <AchivementCard
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
