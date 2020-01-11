import React from 'react';
import './List.css'
import Card from './Card';



function List(props) {

  const cardArray = props.cardIds.map(cardId => (
      <Card 
        key={props.allCards[cardId].id} 
        title={props.allCards[cardId].title} 
        content={props.allCards[cardId].content}
      />
    )
  );

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cardArray}
      <button type="button" class="List-add-button">
        + Add Random Card
      </button>
      </div>
    </section>
  )
}

export default List;