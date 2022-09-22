import React, { useEffect} from 'react';

function EditCustomer(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>Edit Customer</div>
  )
}

export default EditCustomer