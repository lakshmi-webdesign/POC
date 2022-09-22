import React, { useEffect} from 'react';

function Deposit(props) {
    useEffect(() => {
        props.setshow(false);
      });
  return (
    <div>Deposit</div>
  )
}

export default Deposit