
function IndianPlayers() {
    const T20Players = [
        { name: "Dhoni", score: 50 },
        { name: "Sachin", score: 70 },
        { name: "Sehwag", score: 40 },
        { name: "Kohli", score: 61 },
        { name: "Kumble", score: 61 }

    ]
    const RanjiTrophyPlayers = [
        { name: "Rohit", score: 95 },
        { name: "Rahane", score: 100 },
        { name: "Karthik", score: 84 },
        { name: "Yuvraj", score: 64 },
        { name: "Ganguly", score: 80 }
    ]

    const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];
    return (
        <div>
            {IndianPlayers.map((player) => {
                return (
                    <li>Mr. {player.name}, scored {player.score} runs</li>
                );
            })}
        </div>
    );
}

export default IndianPlayers;