import React from 'react';
import FormHandling from '../TwoWayBinding/FormHandling';

const Button = () => {
  const [flage, setFlage] = React.useState(false);

  return (
    <>
      <div className= "w-full bg-black flex justify-center items-center py-5 absolute">
        <button
          onClick={() => {
            setFlage(true);
          }}
          className="w-40 text-white px-8 py-3 border border-green-400 rounded-2xl"
        >
          Click
        </button>
      </div>
      {flage && <FormHandling />}
    </>
  );
};

export default Button;
