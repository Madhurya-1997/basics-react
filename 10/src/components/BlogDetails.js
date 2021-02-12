const { Component } = require("react");


class BlogDetails extends Component {
    state = {
        blogs: [
            {
                id: 1,
                name: "React Learning",
                author: "Stephen Biz",
                details: "Welcome to ReactJs learning"
            },
            {
                id: 2,
                name: "Docker Introduction",
                author: "Sebastian Eschweiler",
                details: "Docker Beginner\'s Guide"
            }
        ]
    }

    render() {
        return (
            <div>
                {this.state.blogs.map((blog) => {
                    return (
                        <div className="blog">
                            <h2>{blog.id}. {blog.name}</h2>
                            <p>Author: <b style={{ color: "#457b9d" }}>{blog.author}</b></p>
                            <p>{blog.details}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BlogDetails;