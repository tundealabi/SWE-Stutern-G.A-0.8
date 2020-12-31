import React from 'react';

const style = {
    "display": "block",
    "fontSize": "2rem",
    "marginBottom": "2rem"
}

const CustomLink = ({linkData:{url,text},handleClick}) => (
    <a style={style} href={url} target="_blank" onClick={(e)=>handleClick(e)} >{text}</a>
)
   
export default CustomLink;
