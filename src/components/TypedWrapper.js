import React from 'react';
import Typewriter from 'typewriter-effect';

const TypedWrapper = () => {
  return (
    <div className="hero-typed">
      <Typewriter
        options={{
          strings: ['An Electrical and Electronics Enthusiast .', 'A Creative Thinker .', 'A Learner.', 'An Innovator.'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 50,
          pauseFor: 1200,
        }}
      />
    </div>
  );
};

export default TypedWrapper;
