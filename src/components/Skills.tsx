import React from 'react';

const Skills: React.FC = () => {
  const skills = ["JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS"];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;