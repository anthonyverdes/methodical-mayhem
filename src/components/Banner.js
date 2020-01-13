import React from 'react';

import Nav from './Nav';

const Banner = (props) => (
    <div className="banner">
        <Nav />
        <img className="background" alt="Banner Background" src="https://wallpapersite.com/images/pages/pic_w/6.jpg" />
        <h1>{props.text}</h1>
    </div>
);

export default Banner;