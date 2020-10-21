import React from 'react';

export default function Footer() {

    return (
        <footer className="footer">
            You can find me on
            {' '}
            <a href="https://www.linkedin.com/in/jason-dove-3096411b7/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
            >LinkedIn</a> and
            {' '}
            <a href="https://github.com/jasondove"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
            >Github</a>.
        </footer>
    );
}
