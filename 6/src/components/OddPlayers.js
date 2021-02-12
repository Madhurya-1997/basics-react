function OddPlayers() {
    const [first, , third, , fifth, , seventh, , ninth,] = [
        { name: "Dhoni", score: 50 },
        { name: "Sachin", score: 70 },
        { name: "Sehwag", score: 40 },
        { name: "Kohli", score: 61 },
        { name: "Kumble", score: 61 },
        { name: "Rohit", score: 95 },
        { name: "Rahane", score: 100 },
        { name: "Karthik", score: 84 },
        { name: "Yuvraj", score: 64 },
        { name: "Ganguly", score: 80 }
    ]
    return (
        <div>
            <li>First: {first.name}, scored {first.score} runs</li>
            <li>Third: {third.name}, scored {third.score} runs</li>
            <li>Fifth: {fifth.name}, scored {fifth.score} runs</li>
            <li>Seventh: {seventh.name}, scored {seventh.score} runs</li>
            <li>Ninth: {ninth.name}, scored {ninth.score} runs</li>
        </div>
    );
}

export default OddPlayers;