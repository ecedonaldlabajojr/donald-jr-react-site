import React from 'react'

const boxesArr = new Array(32).fill("");
const AnimatedBg = () => {
    return (
        <div className="animation-area">
            <ul className="box-area">
                {/* {boxesArr.map((box, index) => (<li key={index}></li>))} */}
            </ul>
        </div>
    )
}

export default AnimatedBg
