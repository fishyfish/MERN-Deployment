import React, { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const initialState = Array.from({ length: 1 }).map((_, idx) => {
        return { id: idx + 1, clicked: false };
    });
    const [buttons, setButtons] = React.useState(initialState);
    const [myLikeButton, setMyLikeButton] = useState();

    function myButtonClick(buttonId) {
        const nextState = buttons.map((button) => {
            setLikes(likes + 1)
        if (button.id !== buttonId) {
            return button;
        }

        return { 
            ...button, clicked: !button.clicked };
        });
       
        setButtons(nextState);
        
    }

    return (
        <div className="nothing">
            {buttons.map((button) => (
                <button
                key={button.id}
                type="button"
                className="myButton like"
                onClick={() => myButtonClick(button.id)}
                disabled = {button.clicked ? true : false}
                >{button.clicked ? "❤️" : "🖤"} {likes}</button>
            ))}
        </div>
    );
    }
    export default LikeButton;
