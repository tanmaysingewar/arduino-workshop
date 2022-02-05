import React from 'react';

function ApplyNow() {
  return (
    <div>
        <div style={{marginTop : 30}}>
            <p style={{fontSize : 18, margin : 0, lineHeight : 2, fontWeight : 600, textAlign : "center"}}>ONLY 40 SEATS OPENING</p>
            <p style={{fontSize : 26, margin : 0, lineHeight : 2, fontWeight : 600, textAlign : "center"}}>First Come First Serve</p>
            <p style={{fontSize : 42, margin : 0, lineHeight : 2, fontWeight : 600, textAlign : "center", marginTop : 30}}>ENROLL NOW</p>
            <div style={{display : "flex",justifyContent : "center", marginBottom : 30}}>
              <a href='https://docs.google.com/forms/d/1jAIGuGegweKLAtzvzdImOzIDrtrgXKBVX3XfuoMbXkw/viewform?edit_requested=true'> 
                <p style={{color : "#fff", textAlign : "center", padding : 10,backgroundColor : "black", alignSelf : "center", width : 150,borderRadius : 2, cursor : "pointer"}}>APPLY NOW !</p>
              </a>
            </div>
        </div>
    </div>
  );
}

export default ApplyNow;
