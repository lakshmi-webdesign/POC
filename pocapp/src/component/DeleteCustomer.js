import React, { useEffect} from 'react';

function DeleteCustomer(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>Delete Customer</div>
  )
}

export default DeleteCustomer