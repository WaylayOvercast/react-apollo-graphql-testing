import './App.css';
import React from 'react';
import Feed from './components/Feed';
import apolloImage from './images/apollo-blog.png';

function App() {
  const [toggle, setToggle] = React.useState(false);


  return (
    <div className="App">
      <nav className='nav'>
        <img src={apolloImage}></img>
      </nav>
      
      {
        toggle ?
        <section className='feed'>
          <Feed>

          </Feed>
        </section> 
        :
        <div className='disclaim'>
          <div className='text-box'>
            <p>
              Hello and welcome to my testing blog. 
            </p>
            <p>
              This is just a small website I created to better understand Apollo, Graphql and Prisma.
            </p>
            <p>
              Thanks. -Max
            </p>
          </div>
          <button 
            onClick={() => setToggle(true)}
            className='loadFeed'
            >Click here to load feed
          </button>
        </div>
      }
    </div>
  );
}

export default App;
