const FirstComponent = () => <h1>My very first component</h1>;

const SecondComponent = () => <h2>My second component</h2>;

const NamedComponent = ({name}) => <p>{`My name is ${name}`}</p>;

function App(){
    return(
        <div>
            <FirstComponent />
            <SecondComponent />
            <NamedComponent name="Tunde"/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
