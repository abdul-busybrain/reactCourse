import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
        Frontend Web Developer and Founder of #abinnova8 (A Technology Hub that
        train and match develepers in emerging markets )
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" style={{ backgroundColor: "red" }} />
      <Skill
        skill="JavaScript"
        emoji="✌"
        style={{ backgroundColor: "green" }}
      />
      <Skill
        skill="Web Design"
        emoji="✌"
        style={{ backgroundColor: "teal" }}
      />
      <Skill skill="React" emoji="👶" style={{ backgroundColor: "blue" }} />
      <Skill
        skill="Mobile App Development"
        emoji="👲"
        style={{ backgroundColor: "yellow" }}
      />
      <Skill
        skill="Git & GitHub"
        emoji="✌"
        style={{ backgroundColor: "#333" }}
      />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={props.style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
