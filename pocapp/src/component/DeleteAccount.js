import React, { useEffect} from 'react';

function DeleteAccount(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>Delete Account</div>
  )
}

export default DeleteAccount