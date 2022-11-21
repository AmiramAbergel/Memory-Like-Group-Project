import React from 'react';
import { NavLink } from 'react-router-dom';
import './Btn.css';
/*
 * This page provides information about the game, links, and credits.
 * There is also a back button on this page that allows you to return to the land page.
 */
const About = () => {
    return (
        <div>
            <header>
                <h1>About/Credits</h1>
            </header>
            <main>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </main>
            <footer>
                <button className='btn'>
                    <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={`/home`}
                    >
                        Back to main menu
                    </NavLink>
                </button>
            </footer>
        </div>
    );
};

export default About;
