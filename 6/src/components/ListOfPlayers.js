
function ListOfPlayers() {
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

    return (
        <div>
            {players.map((player) => {
                return (
                    <li>Mr. {player.name}, scored <b>{player.score} runs</b></li>
                )
            })}
        </div>
    );

}

export default ListOfPlayers;