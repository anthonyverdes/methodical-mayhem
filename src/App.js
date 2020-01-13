import React from 'react';
import './scss/styles.scss';

import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Banner text="Methodical Mayhem" />
      <div id="about" className="info-stripe" style={{ backgroundImage: "url('https://mmo-gs.com/wp-content/uploads/2018/08/bfa_login_no_text.jpg')", backgroundPosition: "0 80%" }}>
        <div className="left">
          <h3>About Us</h3>
          <p>A friendly and super laid back guild from Bleeding Hollow! Feel free to chat in-game, ask questions, and enjoy the game with others! We are down to do pretty much anything to make a friend and lets have fun!</p>
        </div>
        <div className="background-overlay"></div>
      </div>
      <div id="discord" className="info-stripe" style={{ backgroundImage: "url('http://wallpapersqq.net/wp-content/uploads/2016/01/World-Of-Warcraft-Legion-17.jpg')", backgroundPosition: "center" }}>
        <div className="right">
          <h3>Discord Info</h3>
          <p>If you're looking for our discord info, you've come to the right place. Click the icon below!</p>
          <a href="https://discord.gg/p3b8hfG" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
              <path style={{ fill: "#7289DA" }} d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/>
              <path style={{ fill: "#7289DA" }} d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
            </svg>
          </a>
        </div>
        <div className="background-overlay"></div>
      </div>
      <div id="recruitment" className="info-stripe" style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/NpswShgufGTMneqiDv8oHV.jpg')", backgroundPosition: "0 10%" }}>
        <div className="left">
          <h3>Recruitment</h3>
          <p>We're always on the lookout for fun, friendly people. But we are currently interested in tanks and healers for our core raiding group.</p>
          <p>We raid on Wednesdays at 8:35pm EST with clean up scheduled for the weekend.</p>
        </div>
        <div className="background-overlay"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
