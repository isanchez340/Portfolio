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
        <div className="Buttons">
          <p style={{fontSize: 12, textAlign: 'left'}} className="Card">Hello, my Name is Irving Sanchez and I graduated from The University of
          Texas at El Paso with a Bachelors Degree in Computer Science. </p>
        </div>
        <div className="Footer"></div>
      </body>

      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-briefcase fa-fw margin-left large text-blue"></i> Resume </p>
        <div className="Buttons">
          <Button variant="contained" color="primary" href='https://github.com/isanchez340/isanchez340.github.io/raw/master/style/Resume_Irving_Sanchez.docx'>Download Resume</Button>
        </div>
        <div className="Footer"></div>
      </body>

      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-certificate fa-fw margin-left xxlarge text-blue"></i> Projects </p>
        <div className="Buttons">
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Dragon Strikes Back </p>
            <p style={{font: 20, textAlign: 'left'}}>Language: Java </p>
            <Button variant="contained" color="primary" href='https://github.com/isanchez340/Dragon-Strikes-Back'>View Repo</Button>
            <ColoredLine color="#BCB9B9"/>
          <p style={{font: 20, textAlign: 'left', fontWeight: 'bold'}}>Semaphore Video Player</p>
            <p style={{font: 20, textAlign: 'left'}}>Language: Python </p>
            <Button variant="contained" color="primary" href='https://github.com/f18-os/producer-consumer-lab-isanchez340'>View Repo</Button>
        </div>
        <div className="Footer"></div>
      </body>

      <body className="Body">
        <p style={{fontSize: 30, textAlign: 'left'}} className="CardTitle"><i class="fa fa-envelope fa-fw margin-right large text-blue"></i> Contact Me </p>
        <div className="Buttons">
          <p style={{fontSize: 20}}>Email: sanchez.irving006@gmail.com</p>
          <p style={{fontSize: 20}}>Phone Number: (915)841-6130</p>
        </div>
        <div className="Footer"></div>
      </body>

      </div>
    );
  }
}
