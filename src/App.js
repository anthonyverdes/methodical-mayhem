import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="banner">
        <h1>Methodical Mayhem</h1>
        <h3>Bleeding Hollow</h3>
      </div>
      <div className="promo-area">
        <p>A friendly and super laid back guild from Bleeding Hollow! Feel free to chat in-game, ask questions, and enjoy the game with others! We are down to do pretty much anything to make a friend and lets have fun!</p>
      </div>
      <div className="promo-area">
        <h3>Discord Info</h3>
        <p>If you're looking for our discord info, you've come to the right place.</p>
        <a href="https://discord.gg/p3b8hfG">https://discord.gg/p3b8hfG</a>
      </div>
      <div className="promo-area">
        <h3>Recruitment</h3>
        <p>We're always on the lookout for fun, friendly people. But we are currently interested in tanks and healers for our core raiding group.</p>
        <p>We raid on Wednesdays at 8:35pm EST with clean up scheduled for the Monday before reset.</p>
      </div>
      <footer>
        <p>&copy; 2020 | Methodical Mayhem | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
