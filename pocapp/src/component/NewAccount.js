
import React, { useEffect} from 'react';

function NewAccount(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>New Account</div>
  )
}

export default NewAccount