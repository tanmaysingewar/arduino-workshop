import React from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

function LandingPage() {
  return (
    <table>
    <tr>
      <td style={{width : "40%", paddingTop : 30}} className={styles.mobileWidth1} >
        <div className={styles.text}>
          <Image src={"/gp-logo.jpeg"} alt="Vercel Logo" width={100} height={100}  />
        </div>
        <p className={styles.text} style={{fontSize : 22, margin : 0, lineHeight : 1, marginTop : 30}}>GOVERNMENT POLYTECHNIC NAGPUR</p>
        <p className={styles.text} style={{fontSize : 14, color : "#ccc",lineHeight : 1, marginTop : 0, fontWeight : 500}}>ORGANISES UNDER</p>
        <p className={styles.text} style={{fontSize : 22,lineHeight : 1, marginTop : -10}}>E-YANTRA AND HOBBY ELECTRONICS </p>
        <p className={styles.text} style={{fontSize : 14, color : "#ccc",lineHeight : 1, marginTop : -15}}>Workshop on </p>
        <p className={styles.text} style={{fontSize : 40, color : "#D8B894",lineHeight : 1,marginTop : -10}}>ARDUINO DEVELOPMENT BOARD & PROGRAMING</p>
        <p className={styles.text} style={{fontSize : 16, lineHeight : 1}}>On 18th February 2022</p>
        <p className={styles.text} style={{fontSize : 12, lineHeight : 1.5}}>Complete One Day Workshop will give you the experience of working with real Arduino boards and you gonna learn by solving real-life challenges.</p>
        <div style={{display : "flex",justifyContent : "center"}}>
          <a href='https://docs.google.com/forms/d/1jAIGuGegweKLAtzvzdImOzIDrtrgXKBVX3XfuoMbXkw/viewform?edit_requested=true'> 
            <p style={{color : "#fff", textAlign : "center", padding : 10,backgroundColor : "black", alignSelf : "center", width : 150,borderRadius : 2, cursor : "pointer"}}>APPLY NOW !</p>
          </a>
           
        </div>

      </td>
      <td style={{width : "30%", justifyContent : "center", alignContent : "center", height : "100vh"}} className={styles.mobileWidth2}>
        <Image src={"/side-image.png"} alt="Tec Image" width={"800vw"} height={"600vh"}/>
      </td>
    </tr>
    <div>
      
    </div>
  </table>
  );
}

export default LandingPage;
