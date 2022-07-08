import './App.css';
import React from 'react';
import Feed from './components/Feed';
import apolloImage from './images/apollo-blog.png';

function App() {


  return (
    <div className="App">
      <nav className='nav'>
        <img src={apolloImage}></img>
      </nav>
      <section className='feed'>
        <Feed>

        </Feed>
      </section>
    </div>
  );
}

export default App;
