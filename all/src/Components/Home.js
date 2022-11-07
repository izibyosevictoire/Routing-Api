import React from 'react';
import Shop from './Shop';
const Home = (props) => {
  return (
   <>
   <Shop data={props.data} />
   </>
  );
}

export default Home;