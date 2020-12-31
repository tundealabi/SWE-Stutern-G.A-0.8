import React from 'react';

const Div = ({data:{width,height,color,id},handleClick}) => (
    <div style={{"width":Number(width),"height":parseInt(height),"backgroundColor":color,"margin":"1rem"}}>
        <button onClick={()=>handleClick(id)}>X</button>
        </div>
)

export default Div;