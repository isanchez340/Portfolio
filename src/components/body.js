import React from 'react';
import Button from '@material-ui/core/Button';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default class Body extends React.Component {

  render() {
    return (
      <div>
      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-asterisk fa-fw margin-right text-blue"></i> About Me </p>
        <ColoredLine color="#BCB9B9"/>
        <div className="Buttons">
          <p style={{fontSize: 15, textAlign: 'left'}}>Hello, my Name is Irving Sanchez and I graduated from The University of
          Texas at El Paso with a Bachelors Degree in Computer Science. In my free time, I like reading astrophysics and technology articles.
          As a recent graduate I on the process of looking for a job as a Software Engineer. I order to meet my goal of
          landing a job as a Software Engineer, I'm currently devoting all of my free time to studying and learning new
          skills such as using React Js and improving old ones such as Android app development. My favorite hobby is playing video games,
          sadly I don't free time at the moment to play video games however, I am very much excited for any news and the eventual release of
          The Legend of Zelda: Breath of the Wild 2.</p>
        </div>
        <div className="Footer"></div>
      </body>

      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-briefcase fa-fw margin-left large text-blue"></i> Resume </p>
        <ColoredLine color="#BCB9B9"/>
        <div className="Buttons">
          <Button variant="contained" color="primary" href='https://github.com/isanchez340/isanchez340.github.io/raw/master/style/Resume_Irving_Sanchez.pdf'>Download Resume</Button>
        </div>
        <div className="Footer"></div>
      </body>

      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-certificate fa-fw margin-left xxlarge text-blue"></i> Projects </p>
        <ColoredLine color="#BCB9B9"/>
        <div className="Buttons">
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Dragon Strikes Back </p>
            <p style={{font: 20, textAlign: 'left'}}>Language: Java </p>
            <p style={{font: 20, textAlign: 'left'}}>An infinite scrolling game programed in Java using Android Studion for Android os. </p>
            <Button variant="contained" color="primary" href='https://github.com/isanchez340/Dragon-Strikes-Back'>View Repo</Button>
            <ColoredLine color="#BCB9B9"/>
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Semaphore Video Player</p>
            <p style={{font: 20, textAlign: 'left'}}>Language: Python </p>
            <p style={{font: 20, textAlign: 'left'}}>A Video player for mp4 files written in Python that that takes each frame and converts it to grayscale before displaying.</p>
            <Button variant="contained" color="primary" href='https://github.com/f18-os/producer-consumer-lab-isanchez340'>View Repo</Button>
            <ColoredLine color="#BCB9B9"/>
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Password Cracker</p>
            <p style={{font: 20, textAlign: 'left'}}>Language: Java </p>
            <p style={{font: 20, textAlign: 'left'}}>Program written in Java that cracks passwords hashed with SHA1 and then SHA256.</p>
            <Button variant="contained" color="primary" href='https://github.com/isanchez340/passcrack'>View Repo</Button>
            <ColoredLine color="#BCB9B9"/>
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Student Access Manager</p>
            <p style={{font: 20, textAlign: 'left'}}>Language: PHP/MySQL </p>
            <p style={{font: 20, textAlign: 'left'}}>Web Interface written in PHP that interfaced with a MySQL database that would keep track of graduating students in order to revoke lab access.</p>
            <Button variant="contained" color="primary" href='https://github.com/isanchez340/database'>View Repo</Button>
            <ColoredLine color="#BCB9B9"/>
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Employee Database Reader</p>
            <p style={{font: 20, textAlign: 'left'}}>Language: Java using Spring Boot Framework </p>
            <p style={{font: 20, textAlign: 'left'}}>Small app that built using the Spring Boot framework that reads a list of employees from a database hosted on localhost.</p>
            <Button variant="contained" color="primary" href='https://github.com/isanchez340/SpringBootDB'>View Repo</Button>
            <ColoredLine color="#BCB9B9"/>
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Portfolio Web  App</p>
            <p style={{font: 20, textAlign: 'left'}}>Language: React Js </p>
            <p style={{font: 20, textAlign: 'left'}}>This mobile app written in JavaScript and CSS with the aid of the React Framework.</p>
            <Button variant="contained" color="primary" href='https://github.com/isanchez340/Portfolio'>View Repo</Button>
        </div>
        <div className="Footer"></div>
      </body>

      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-envelope fa-fw margin-right large text-blue"></i> Contact Me </p>
        <ColoredLine color="#BCB9B9"/>
        <div className="Buttons">
          <p style={{fontSize: 15, textAlign: 'left'}}>Email: sanchez.irving006@gmail.com</p>
          <ColoredLine color="#BCB9B9"/>
          <p style={{fontSize: 15, textAlign: 'left'}}>Phone Number: (915)841-6130</p>
        </div>
        <div className="Footer"></div>
      </body>

      </div>
    );
  }
}
