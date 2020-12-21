import React from 'react';
const Person = ({name,age,hobbies}) => {
    return (
        <div>
            <h2>{name.length > 6 ? name.substring(0,6) : name}</h2>
            <p>Learn some information about this person.</p>
            {age > 21 ? 
            (<p>have a drink!</p>) 
                : 
            (<p>you must be 21</p>)
            }
            {hobbies.map((hobby,idx) => <li key={idx}>{hobby}</li>)}
        </div>
    )
};

export default Person;