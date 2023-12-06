import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";


function Card(prop) {

  const navigate = useNavigate();

  let { id, title, body } = prop;

  const handel = (title,body) => {
   
    navigate("/blog", {
      state: {
        title: title,
        body: body,
      },
    });
  };

  return (
    <>
      <div className="card">
        <h2>{`User ${id}`}</h2>
        <button value={id} key={id} onClick={()=>{handel(title,body)}}>
          View Post
        </button>
      </div>
    </>
  );
}

export default Card;
