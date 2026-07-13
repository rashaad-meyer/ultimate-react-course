import "./App.css";

function Avatar(props) {
  return <img src={props.fileName} alt="Developer Image" />;
}

function Intro(props) {
  return <p>{props.description}</p>
}

function Skill(props) {
  return <span className='skill' style={{backgroundColor: props.color}}>{props.name}</span>
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill name="Java 🍵" color="orange" />
      <Skill name="Python 🐍" color="red" />
      <Skill name="HTML 🙈" color="yellow" />
    </div>
  )
}

function App() {
  return (
    <div className="card">
      <Avatar description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
