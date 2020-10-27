import React from 'react';
import {CSSTransition} from 'react-transition-group';

export default function InfoBox(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.changeView(e.currentTarget.getAttribute('value'));
    };

    const links = [
        <span>
            Are you hiring an {' '}
            <a href="#"
                className="link"
                value="1"
                onClick={handleClick}
            >
                Engineering Manager
            </a>
            {' '}or a {' '}
            <a href="#"
                className="link"
                value="2"
                onClick={handleClick}
            >
                Front-End Developer
            </a>
            ?
        </span>,
        <span>
            Are you hiring a {' '}
            <a href="#"
                className="link"
                value="2"
                onClick={handleClick}
            >
                Front-End Developer
            </a>
            {' '}or are you {' '}
            <a href="#"
                className="link"
                value="0"
                onClick={handleClick}
            >
                undecided
            </a>
            ?
        </span>,
        <span>
            Are you hiring a {' '}
            <a href="#"
                className="link"
                value="1"
                onClick={handleClick}
            >
                Engineering Manager
            </a>
            {' '}or are you {' '}
            <a href="#"
                className="link"
                value="0"
                onClick={handleClick}
            >
                undecided
            </a>
            ?
        </span>,

    ];

    return (
        <CSSTransition
            in={props.transitioning}
            timeout={300}
            classNames="fade"
        >
            <div className="info-box">
                <div className="info-box__header">{props.data.title}</div>
                <p>
                    {props.data.text}
                </p>
                {props.data.list &&
                    <ul>
                        {props.data.list.map((text, index) => {
                            return <li key={index}>{text}</li>;
                        })}
                    </ul>
                }
                {links[props.currentView]}
            </div>
        </CSSTransition>
    );
}
