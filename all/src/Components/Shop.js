import React from 'react';
import Card from "./Card";
import Add from './Add';

const Shop = (props) => {
 
  return (
    
    <section>

      {
       props.data.map((item,index)=>(
            <Card key={index} item={item}/>
         ) )
      }
    </section>
  );
}

export default Shop;
