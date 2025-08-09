import React from 'react'

const ConditionalRendering = ({ isValid }) => {
    const Valid = () => <div>Valid</div>;
    const Invalid = () => <div>Invalid</div>;
  return isValid ? <Valid /> : <Invalid />;
}

export default ConditionalRendering