import React from 'react';
import FormHandling from '../TwoWayBinding/FormHandling';

const Button = () => {
  const [flage, setFlage] = React.useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <button
          onClick={() => {
            setFlage(true);
          }}
          className="text-white px-8 py-3 border border-green-400"
        >
          Click
        </button>
      </div>
      {flage && <FormHandling />}
    </>
  );
};

export default Button;
