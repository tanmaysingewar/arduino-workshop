import React from 'react';

function Shedule() {
  return (
    <div>
      <div style={{  marginRight : 70, paddingBottom : 40, marginTop : 30, color : "#fff", paddingTop : 30,backgroundColor : "#000",width : "100vw"}} >   
      <div style={{padding : 0,padding: "0 4rem", paddingTop : 20,paddingBottom : 50,backgroundColor : "#000"}}>
          <p style={{fontSize : 26, margin : 0, lineHeight : 1, marginTop : 30, color : "#fff",textAlign : "center"}}>Schedule for Our Day </p>
          <p style={{fontSize : 14, margin : 0, lineHeight : 2, color : "#fff",fontWeight : 400, marginTop : 10}}>
            <table align="center">
              <tr>
                <td style={{width : 120}}><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>10 : 30 - 11 : 00  </span></td>
                <td><p style={{textAlign : "left"}}> Inauguration </p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>11 : 00 - 12 : 00  </span></td>
                <td><p style={{textAlign : "left"}}> Introduction to the assembly  of electronic components  </p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>12 : 00 - 12 : 30  </span></td>
                <td><p style={{textAlign : "left"}}> Installing Arduino IDE on Desktop and Laptop & Introduction to IDE  </p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>12 : 30 - 01 : 00  </span></td>
                <td><p style={{textAlign : "left"}}> Introduction to Arduino Development Board</p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>01 : 00 - 01 : 30  </span></td>
                <td><p style={{textAlign : "left"}}> Break </p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>01 : 30 - 02 : 30  </span></td>
                <td><p style={{textAlign : "left"}}> Interfacing external peripheral to Arduino Board and related Programing </p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>02 : 30 - 05 : 00  </span></td>
                <td><p style={{textAlign : "left"}}> Hands-on Arduino Board and Programing </p></td>
              </tr>
              <tr>
                <td><span style={{fontSize : 14, color : "#fff", fontWeight : 300}}>05 : 00 - 05 : 30  </span></td>
                <td><p style={{textAlign : "left"}}>Valedictory and FeedBack</p></td>
              </tr>
            </table>
            
          </p>
          </div>
        </div>
      </div>
    );
}

export default Shedule;
