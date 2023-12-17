import React from 'react'
import "./Projects.css"
import Box from '../../Components/Box/Box'

import weatherImage from "../../Images/projects/weather.jpg";
import chatImage from "../../Images/projects/chat.jpg";
import snsImage from "../../Images/projects/sns.jpg";
import portfolioImage from "../../Images/projects/portfolio.jpg"

export default function Projects(props) {
  return (
    <div className='project' id="project">
      <h1>Projects</h1>
      <div className="projectList">
      <Box className="box" imageUrl={portfolioImage} githubLink="https://github.com/mai0711/Portfolio" title="Portfolio" content="HTML, CSS, JavaScript, React.js" />
        <Box className="box" imageUrl={weatherImage} githubLink="https://github.com/mai0711/Weather-app-React" title="Weather forecast app" content="HTML, CSS, JavaScript, React.js" />
        <Box className="box" imageUrl={chatImage} githubLink="https://github.com/mai0711/chat-app" title="Chat app" content="HTML, CSS, JavaScript, Node.js, React.js, MongoDB" />
        <Box className="box" imageUrl={snsImage} githubLink="https://github.com/mai0711/SNS-app" title="Social media app" content="HTML, CSS, JavaScript, Node.js, React.js, MongoDB" />
      </div>
    </div>
  )
}
