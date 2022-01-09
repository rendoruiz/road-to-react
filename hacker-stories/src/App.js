import * as React from 'react';

const list = [
  {
    title: 'React', 
    url: 'https://reactjs.org/', 
    author: 'Jordan Walke', 
    num_comments: 3, 
    points: 4, 
    objectID: 0,
  }, 
  {
    title: 'Redux', 
    url: 'https://redux.js.org/', 
    author: 'Dan Abramov, Andrew Clark', 
    num_comments: 2, 
    points: 5, 
    objectID: 1,
  },
];

function App() {
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={list} />
    </div>
  );
}

function List(props) {
  return ( 
    <ul>
      {props.list.map(function (item) { 
        return ( 
          <Item key={item.objectID} item={item} />
        ); 
      })} 
    </ul>
  );
}

function Item(props) {
  return (
    <li> 
      <span> 
        <a href={props.item.url}>{props.item.title}</a> 
      </span>
      <span>{props.item.author}</span> 
      <span>{props.item.num_comments}</span> 
      <span>{props.item.points}</span>
    </li> 
  )
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label> 
      <input id="search" type="text" />
    </div>
  );
}

export default App;
