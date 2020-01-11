import React from 'react';
import STORE from './store';
import './App.css';
import List from './composition/List'

function App(props) {
  const listArray = STORE.lists.map(list => (
    <List
      key={list.id} 
      header={list.header} 
      cardIds={list.cardIds}
      allCards={STORE.allCards}
    />
  ));

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {listArray}
      </div>
    </main>
  );
}

export default App;