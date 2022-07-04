import React, { useState } from 'react';

function Toggle({ options }) {
  const [option1, option2] = options;
  const [selected, setSelected] = useState('option1');

  const handleClick = (e) => {
    const name = e.target.getAttribute('name');
    setSelected(name);
  };

  return (
    <div className="toggle-container" onClick={handleClick}>
      <div
        className={selected === 'option1' ? 'slider left' : 'slider right'}
      ></div>
      <div className="toggle">
        <div
          name="option1"
          className={selected === 'option1' ? 'selected option' : 'option'}
        >
          {option1.text}
        </div>
        <div
          name="option2"
          className={selected === 'option2' ? 'selected option' : 'option'}
        >
          {option2.text}
        </div>
      </div>
    </div>
  );
}

export default Toggle;
