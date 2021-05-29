import React from 'react';
import Typewriter from "typewriter-effect";

const TextEffect = () => {
    return (
        <div className=" font-weight-bold h4 d-flex" style={{color: 'red'}}>
            <span className="mr-2">A</span>
            <Typewriter
                options={{
                    strings: ["Full-Stack Developer", "Web Designer", "Programmer", "Self Learner"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                }}
            />
        </div>
    );
};

export default TextEffect;