import React from 'react'

const Colordiv = ({color,index,handleClick}) => <div style={{backgroundColor:color}} onClick={()=>handleClick(index)} ></div>;

export default Colordiv;
