const { Component } = require("react");


class BookDetails extends Component {
    state = {
        books: [
            { id: 1, name: "Master React", price: 670 },
            { id: 2, name: "Heads up Java", price: 800 },
            { id: 3, name: "Spring in Action", price: 450 }
        ]
    }

    render() {
        return (
            <div>
                {this.state.books.map((book) => {
                    return (
                        <div className="book">
                            <h2>{book.id}. {book.name}</h2>
                            <h5>Rs. {book.price}</h5>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BookDetails;