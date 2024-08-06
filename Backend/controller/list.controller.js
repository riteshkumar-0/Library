import List from "../model/list.model.js"

// Function to create a new list
const createList = async (req, res) => {
    const { name } = req.body;
    try {
        const newList = new List({ name, books: [] });
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to add a book to a list
const addBookToList = async (req, res) => {
    const { listId } = req.params;
    const { bookId } = req.body;
    try {
        const list = await List.findById(listId);
        list.books.push(bookId);
        await list.save();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to get books from a list
const getBooksFromList = async (req, res) => {
    const { listId } = req.params;
    try {
        const list = await List.findById(listId).populate("books");
        res.status(200).json(list.books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to delete a book from a list
const deleteBookFromList = async (req, res) => {
    const { listId, bookId } = req.params;
    try {
        const list = await List.findById(listId);
        list.books = list.books.filter(book => book.toString() !== bookId.toString());
        await list.save();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const fetchLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export {
    createList,
    addBookToList,
    getBooksFromList,
    deleteBookFromList,
    fetchLists
};