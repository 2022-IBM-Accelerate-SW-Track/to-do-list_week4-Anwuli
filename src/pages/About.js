import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
           <div className="name_title">Anwuli Ajabor</div>
           <div className="brief_description">
             <p>I am a rising Sophmore in Florida institute of technology. I love music and dancing.</p>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
