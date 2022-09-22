
import React, { useEffect} from 'react';

function Newcustomer(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>Newcustomer</div>
  )
}

export default Newcustomer
