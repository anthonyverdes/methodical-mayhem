import React from 'react';

const Footer = (props) => {

    const getYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    return (
        <footer>
            <p>&copy; {getYear()} | Methodical Mayhem | All Rights Reserved</p>
        </footer>
    );
};

export default Footer;