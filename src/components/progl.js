import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

export default class Bars extends React.Component {
  render() {
    return (
      <div className="Skills">
        <ColoredLine color="#BCB9B9"/>
        <div>
          <h4>Skills</h4>
          <p>Java</p>
          <ProgressBar label={'95%'} now={95} />
          <p>C/C++</p>
          <ProgressBar label={'85%'} now={85} />
          <p>Python</p>
          <ProgressBar label={'80%'} now={80} />
          <p>PHP</p>
          <ProgressBar label={'50%'} now={50} />
          <p>React.js{'\t'}</p>
          <ProgressBar label={'30%'} now={30} />
        </div>
      </div>
    );
  }
}
