import React from 'react';
import data from './data';
import Person from './components/person.jsx';

function App() {
    return (
        <div>
            <h1>Person(JSX part 3) Refactoring with webpack</h1>
            {data.map(info=> <Person key={info.id} {...info}/>)}
        </div>
    );
}

export default App;

