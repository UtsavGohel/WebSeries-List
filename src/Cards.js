import React from "react";

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="img" />
          <div className="card_info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.seriesname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
