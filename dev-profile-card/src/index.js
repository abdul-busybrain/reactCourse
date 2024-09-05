import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Mobile App Development",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="/busybrain.jpeg" alt="Abdullahi.Busybrain" className="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Abdullahi.Busybrain</h1>
      <p>
        Frontend Web Developer and Founder of #abinnov8 (A Technology Hub that
        train and match develepers in emerging markets)
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );

  // <div className="skill-list">
  //   <Skill skill="HTML + CSS" emoji="💪" style={{ backgroundColor: "red" }} />
  //   <Skill
  //     skill="JavaScript"
  //     emoji="✌"
  //     style={{ backgroundColor: "green" }}
  //   />
  //   <Skill
  //     skill="Web Design"
  //     emoji="✌"
  //     style={{ backgroundColor: "teal" }}
  //   />
  //   <Skill skill="React" emoji="👶" style={{ backgroundColor: "blue" }} />
  //   <Skill
  //     skill="Mobile App Development"
  //     emoji="👲"
  //     style={{ backgroundColor: "yellow" }}
  //   />
  //   <Skill
  //     skill="Git & GitHub"
  //     emoji="✌"
  //     style={{ backgroundColor: "#333" }}
  //   />
  // </div>
}

function Skill(props) {
  const levelEmoji = {
    beginner: "👶",
    intermediate: "✌",
    advanced: "💪",
  };

  return (
    <div className="skill" style={{ backgroundColor: props.skillObj.color }}>
      <span>{props.skillObj.skill}</span>
      <span>{levelEmoji[props.skillObj.level]}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
