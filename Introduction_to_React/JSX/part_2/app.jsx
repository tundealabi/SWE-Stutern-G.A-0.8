const data = [
    {
        id: 1,
        username: "EmmyM_ighty",
        name: "Manny",
        dateOfTweet: "1/12/2020",
        message: "This is my first Tweet in a while!!"
    },
    {
        id: 2,
        username: "Temi_George",
        name: "Temie",
        dateOfTweet: "10/11/2020",
        message: "This is going to be really fun!"
    },
    {
        id: 3,
        username: "Ope_Bantale",
        name: "Opeyemi",
        dateOfTweet: "11/1/2021",
        message: "This is a tweet for the future.."
    },
    {
        id: 4,
        username: "Jake",
        name: "Tunde",
        dateOfTweet: "11/2/2020",
        message: "This is what i love to do best!"
    },
    {
        id: 5,
        username: "Popad",
        name: "Daniel",
        dateOfTweet: "18/5/2020",
        message: "This is a cool tweet"
    }
];

const Tweet = ({data:{username,name,dateOfTweet,message}}) => (
    <div className='tweet'>
    <h2>User Name: <span className='user'>{username}</span></h2>
    <h4>Name: <span className='user'>{name}</span></h4>
    <h4>Date: <span className='user'>{dateOfTweet}</span></h4>
    <p className='text'>{message}</p>
</div>
);


function App(){
    return(
        <div>
            {
                data.map(info=> <Tweet key={info.id} data={info}/>)
            }
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
