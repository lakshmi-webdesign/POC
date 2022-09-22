import React, { useEffect} from 'react';

function EditAccount(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>Edit Account</div>
  )
}

export default EditAccount