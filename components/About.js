import React from 'react';

function About() {
  return <div>
      <div style={{backgroundColor : "#000", paddingBottom : 50}}>
        <div style={{padding : 0,padding: "0 4rem", paddingTop : 20}}>
          <p style={{fontSize : 26, margin : 0, lineHeight : 1, marginTop : 30, color : "#fff"}}>About</p>
          <p style={{fontSize : 14, margin : 0, lineHeight : 2, color : "#ccc",fontWeight : 300}}>Our One Day Workshop </p>
          <p style={{fontSize : 14, margin : 0, lineHeight : 2, color : "#fff",fontWeight : 300}}>
            <li>Get familiar with various electronic components and sensors.</li>
            <li>Hands-on experience on a breadboard for assembling electronic circuits.</li>
            <li>Work with real Arduino board and simulation tools.</li>
            <li>Get familiar with programing Language Embedded C.</li>
          </p>
        </div>
        <div style={{padding : 0,padding: "0 4rem", paddingTop : 20}}>
          <p style={{fontSize : 26, margin : 0, lineHeight : 1, marginTop : 30, color : "#fff"}}>Get Prepared For E-yantra Competition</p>
          <p style={{fontSize : 14, margin : 0, lineHeight : 2, color : "#ccc",fontWeight : 300}}>About Competition </p>
          <p style={{fontSize : 14, margin : 0, lineHeight : 2, color : "#ccc",fontWeight : 400}}>Enjoying the rote classroom or online learning? We hope Not !! <br/>
          We bring you India’s biggest PBL (Project Based Learning) robotics competitions - the e-Yantra Robotics Competition (eYRC) hosted by e-Yantra, IIT Bombay.</p>
        </div>
      </div>
  </div>;
}

export default About;
