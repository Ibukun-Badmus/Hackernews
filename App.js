import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const list = [
  {
    title: 'React',
    url: 'http://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID:0
  },
  {

  title: 'Redux',
  url: 'http://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments:2,
  points:5,
  

  }
]

class App extends  Component{
  render(){
    return(
      <div className="App">
        {list.map(function(item){
          return(
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              
          </div>
          );
        }
        )}
        </div>
    );
  }
}

export default App;
