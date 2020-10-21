import React from 'react';

export default function InfoBox(props) {
    const handleClick = (value) => {
        props.changeView(value);
    };

    return (
        <div className="info-box">
            <a href="#"
                className="info-box__header"
                onClick={() => handleClick(props.currentView === 0 ? props.data.view : 0)}
            >{props.data.title}</a>
            <p>
                {props.data.text}
                {props.currentView === props.data.view &&
                    props.data.textExtended}
            </p>
            {props.currentView === props.data.view &&
                <ul>
                    {props.data.list.map((text, index) => {
                        return <li key={index}>{text}</li>;
                    })}
                </ul>
            }
            {props.currentView !== props.data.view &&
                <a href="#"
                    className="link"
                    onClick={() => handleClick(props.data.view)}
                >Learn More</a>}
            {props.currentView === props.data.view &&
                <a href="#"
                    className="link"
                    onClick={() => handleClick(0)}
                >&larr; Back</a>}
        </div>
    );
}
