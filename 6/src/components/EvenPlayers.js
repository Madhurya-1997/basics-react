
function EvenPlayers() {
    const [, second, , fourth, , sixth, , eighth, , tenth] = [
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
            <li>Second: {second.name}, scored {second.score} runs</li>
            <li>Fourth: {fourth.name}, scored {fourth.score} runs</li>
            <li>Sixth: {sixth.name}, scored {sixth.score} runs</li>
            <li>Eighth: {eighth.name}, scored {eighth.score} runs</li>
            <li>Tenth: {tenth.name}, scored {tenth.score} runs</li>
        </div>
    );
}

export default EvenPlayers;
