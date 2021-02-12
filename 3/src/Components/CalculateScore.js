import '../Stylesheets/style.css';



const calculateScore = (marks, goal) => {
    return (marks / goal).toFixed(2);
}

const CalculateScore = ({ Name, College, Marks, Goal }) => {
    return (
        <div className="Format">
            <h1>Student Details</h1>

            <div className="Name">
                <b><span>Name: </span></b>
                <span>{Name}</span>
            </div>
            <div className="College">
                <b><span>College: </span></b>
                <span>{College}</span>
            </div>
            <div className="Marks">
                <span>{Marks}</span>
                <b><span> Marks</span></b>
            </div>
            <div className="Percentage">
                <b><span>Percentage: </span></b>
                <span>{calculateScore(Marks, Goal)} %</span>
            </div>
        </div>
    );
}


export default CalculateScore;