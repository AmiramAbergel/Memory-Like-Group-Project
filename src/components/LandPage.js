import React from 'react';
import { NavLink } from 'react-router-dom';
const LandPage = () => {
    return (
        <div>
            <header>
                <h1>Welcome To Memory Like!</h1>
            </header>
            <main>
                <h2>Description:</h2>
                <p>This is flip card game that work on your memory</p>
                <p>For more details go to about page...</p>
            </main>
            <footer>
                <h2>Here is our options:</h2>
                <button>
                    <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={`/new-memory-game`}
                    >
                        Start New Game
                    </NavLink>
                </button>
                <button>
                    <NavLink
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={`/about`}
                    >
                        About&Credits
                    </NavLink>
                </button>
            </footer>
        </div>
    );
};

export default LandPage;
