import React from 'react';
import { Chrono } from "react-chrono";

// ref: https://github.com/prabhuignoto/react-chrono

const timelineItems = [{
  title: "May 1940",
  url: "http://www.history.com",
  cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
  media: {
    type: "IMAGE",
    source: {
      url: "https://www.nagoya-u.ac.jp/common/img/logo.gif"
    }
  }
}];

export default function HomepageFeatures() {
  
  return (
    <header >
      <div className="container">
        <div style={{ width: "100%", height: "400px" }}>
          <Chrono 
            items={timelineItems}
          />
        </div>
      </div>
    </header>
  );
}