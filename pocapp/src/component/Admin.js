
import React, { useEffect} from 'react';

function Admin(props) {
  useEffect(() => {
    props.setshow(false);
  });
  return (
    <div>Admin</div>
  )
}

export default Admin