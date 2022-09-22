import React, { useState , useEffect} from 'react';
import Admin from './Admin';
function Manager(props) {
  //props.setshow(false);
  useEffect(() => {
    props.setshow(false);
  });
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    {/* <Admin/> */}
  </>
  )
}

export default Manager