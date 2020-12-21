const data = [
    {
        id: 130,
        name: "Emmanuel Oderemi",
        age: 28,
        hobbies: ["Gaming", "Tech", "Squeezing face"]
    },
    {
        id: 135,
        name: "Tunde",
        age: 20,
        hobbies: ["Gaming", "Coding", "Loving"]
    },
    {
        id: 235,
        name: "Temie",
        age: 26,
        hobbies: ["Swimming", "Coding", "Inventing"]
    }
];

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

function App () {
    return(
        <div>
            {data.map(info=> <Person key={info.id} {...info}/>)}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));