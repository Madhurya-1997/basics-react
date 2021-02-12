function ScoreLessThan70() {

    const players = [
        { name: "AAAAAA", score: 50 },
        { name: "BBBBBB", score: 70 },
        { name: "CCCCCC", score: 40 },
        { name: "DDDDDD", score: 61 },
        { name: "EEEEEE", score: 61 },
        { name: "FFFFFF", score: 95 },
        { name: "GGGGGG", score: 100 },
        { name: "HHHHHH", score: 84 },
        { name: "IIIIII", score: 64 },
        { name: "JJJJJJ", score: 75 },
        { name: "KKKKKK", score: 80 }
    ]

    const players70 = [];
    players.forEach((player) => {
        if (player.score <= 70) {
            players70.push(player)
        }
    })

    return (
        <div>
            {players70.map((player) => {
                if (player.score <= 70) {
                    return (
                        <li>Mr. {player.name}, scored <span>{player.score} runs</span></li>
                    )
                }
            })}
        </div>
    );

}


export default ScoreLessThan70;