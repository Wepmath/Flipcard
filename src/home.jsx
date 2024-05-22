import React from 'react';
import Left_top from './left_top.jsx';

function Home() {
  const title = {
    "red": 3,
    "blue": 4
  }
  return (
    <main>
      <Left_top title={JSON.stringify(title)}/>
      <div className="home">
        <input type="image" src="src/home.jpg"></input>
      </div>
    </main>
  );
}

export default Home;