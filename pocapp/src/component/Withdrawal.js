import React, { useEffect} from 'react';

function Withdrawal(props) {
    useEffect(() => {
        props.setshow(false);
      });
  return (
    <div>Withdrawal</div>
  )
}

export default Withdrawal