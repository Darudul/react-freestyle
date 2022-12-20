import React, { useState, useReducer } from 'react'


const booksData = [
    { id: 1, name: "Think & grow rich" },
    { id: 2, name: "Start with why" },
    { id: 3, name: "Atomic habits" },
];

const Modal = ({ modalTex }) => {
    return (
        <p>{modalTex}</p>
    )
}


const reducer = (state, action) => {
    if (action.type === "ADD") {
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is Added"
        }
    }
    if (action.type === "REMOVE") {
        const filteredBooks = [...state.books].filter(book => book.id !== action.payload)
        return {
            ...state,
            books: filteredBooks,
            isModalOpen: true,
            modalText: "Book has been removed"

        }
    }

}


const HooksUseReducer = () => {
    // const [books, setBooks] = useState(booksData)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [modalText, setModalText] = useState("")

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalTex: "",
    })
    const [bookName, setBookName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        dispatch({ type: "ADD", payload: newBook })
        setBookName("")
    };
    const removeBook = (id) => {
        dispatch({ type: "REMOVE", payload: id })
    }
    return (
        <div>
            <h1> BookList: {bookState.books.length}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} placeholder="Enter your book name" onChange={(e) => { setBookName(e.target.value) }} />
                <button type='submit'>Add book</button>
            </form>
            {bookState.isModalOpen && <Modal modalTex={bookState.modalText} />}
            {
                bookState.books.map(book => {
                    const { id, name } = book;
                    return <li key={id}>
                        {name} <button onClick={() => removeBook(id)}>X</button>
                    </li>

                })
            }
        </div >
    )
}

export default HooksUseReducer