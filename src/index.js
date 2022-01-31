import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Data from "./Data";

import Card from "./Cards";

// This is one way that we can create cards
ReactDOM.render(
  <>
    <h1 className="heading_style">List Of Top Web-Series</h1>
    <Card
      imgsrc={Data[0].imgsrc}
      seriesname={Data[0].seriesname}
      title={Data[0].title}
      link={Data[0].link}
    />

    <Card
      imgsrc={Data[1].imgsrc}
      seriesname={Data[1].seriesname}
      title={Data[1].title}
      link={Data[1].link}
    />

    <Card
      imgsrc={Data[2].imgsrc}
      seriesname={Data[2].seriesname}
      title={Data[2].title}
      link={Data[2].link}
    />

    <Card
      imgsrc={Data[3].imgsrc}
      seriesname={Data[3].seriesname}
      title={Data[3].title}
      link={Data[3].link}
    />

    <Card
      imgsrc={Data[4].imgsrc}
      seriesname={Data[4].seriesname}
      title={Data[4].title}
      link={Data[4].link}
    />

    <Card
      imgsrc={Data[5].imgsrc}
      seriesname={Data[5].seriesname}
      title={Data[5].title}
      link={Data[5].link}
    />
  </>,
  document.getElementById("root")
);

//This is second way that we can create cards by map function
// function ncard(val) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       seriesname={val.seriesname}
//       title={val.title}
//       link={val.link}
//     />
//   );
// }

// ReactDOM.render(
//   <>
//     <h1 className="heading_style">List Of Top Web-Series</h1>
//     {Data.map(ncard)}
//   </>,
//   document.getElementById("root")
// );
