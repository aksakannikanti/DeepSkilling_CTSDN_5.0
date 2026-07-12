function BookDetails(props) {

    const bookdet = (
        <ul>
            {props.books.map((book) =>
                <div key={book.id}>
                    <h2>{book.bname}</h2>
                    <h3>{book.price}</h3>
                </div>
            )}
        </ul>
    );

    return (
        <div>
            <h1>Book Details</h1>
            {bookdet}
        </div>
    );
}

export default BookDetails;