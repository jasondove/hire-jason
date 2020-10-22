import React from 'react';
import {CSSTransition} from 'react-transition-group';

export default function ImgBox(props) {
    const imgs = ['me0.png', 'me1.png', 'me2.png'];
    const preloadImgs = (imgs) => {
        const len = imgs.length;
        for (let i = 0; i < len; i++) {
            const img = new Image();
            img.src = imgs[i];
        }
    };
    preloadImgs(imgs);

    return (
        <div className="img-container">
            <div className="img-container__inner">
                <CSSTransition
                    in={props.transitioning}
                    timeout={300}
                    classNames="fade"
                >
                    <img className="img-container__img" src={`me${props.currentView}.png`} alt="Jason Dove" />
                </CSSTransition>
            </div>
        </div>
    );
}
