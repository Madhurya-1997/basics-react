const { Component } = require("react");


class CourseDetails extends Component {
    state = {
        courses: [
            { id: 1, name: "Angular", date: "4/5/2021" },
            { id: 2, name: "React", date: "6/3/2021" }
        ]
    }

    render() {
        return (
            <div>
                {this.state.courses.map((course) => {
                    return (
                        <div className="course">
                            <h2>{course.id}. {course.name}</h2>
                            <h5>Dated: {course.date}</h5>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CourseDetails;