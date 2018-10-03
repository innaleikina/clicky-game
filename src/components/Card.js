import React from 'react';
import '../styles/cards.css'


const Card = props => (

      <div className="image-container" onClick = {(e,) => props.handleClick(e)}>
        <img alt="baby-animal" id={props.id} src={props.image}/>
      </div>

  );
  

export default Card;