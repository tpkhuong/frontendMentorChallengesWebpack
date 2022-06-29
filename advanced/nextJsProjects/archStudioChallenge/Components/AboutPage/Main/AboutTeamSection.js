import React from "react";
import TeamSectionStyles from "../../../styles/About/AboutTeamSection.module.css";
import MemberCard from "./MemberCard";

function TeamSection({ children, ...props }) {
  return (
    <article className={TeamSectionStyles[`leaders-sections`]}>
      <h2 className={TeamSectionStyles[`title`]}>The Leaders</h2>
      <div className={TeamSectionStyles[`team-container`]}>
        <div className={TeamSectionStyles[`first-row`]}>
          {/* membercard component goes here */}
          {/* Jake */}
          <MemberCard
            img="/about/desktop/avatar-jake.jpg"
            text="Male wearing sunglasses with dark gray suit and dark blue tie."
            name="Jake Richards"
            position="Chief Architect"
          />
          {/* Thompson */}
          <MemberCard
            img="/about/desktop/avatar-thompson.jpg"
            text="Male wearing dark gray vest and orange tie."
            name="Thompson Smith"
            position="Head of Finance"
          />
        </div>
        <div className={TeamSectionStyles[`second-row`]}>
          {/* membercard component goes here */}
          {/* Jackson */}
          <MemberCard
            img="/about/desktop/avatar-jackson.jpg"
            text="Male wearing white dress suit under light grey coat."
            name="Jackson Rourke"
            position="Lead Designer"
          />
          {/* Maria */}
          <MemberCard
            img="/about/desktop/avatar-maria.jpg"
            text="Female black out fit."
            name="Maria Simpson"
            position="Senior Architect"
          />
        </div>
      </div>
    </article>
  );
}

export default TeamSection;
