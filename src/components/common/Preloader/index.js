import React from 'react';
import './style.css';

let MultipleDiv = () => {
    return (
        <div className="square_animation_container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    );
}




function BackgroundOfPreloader() {
    return (
        <section className="bg_of_cv_site">
            <MultipleDiv />
        </section>
    );
}






let LevelUpLoading = () => {
    return (
        <div className="downloadPage">
            <div>
                <ul className="levelUpJump">
                    <li><i className="fas fa-code"></i></li>
                    <li>L</li>
                    <li>E</li>
                    <li>V</li>
                    <li>E</li>
                    <li>L</li>
                    <li>U</li>
                    <li>P</li>
                </ul>
            </div>
        </div>

    );
}


export {
    BackgroundOfPreloader,
    LevelUpLoading
};
