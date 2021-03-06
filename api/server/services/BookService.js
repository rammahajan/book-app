import database from '../database/models';

class BookService {
    static async getAllBooks() {
        try {
            return await database.Book.findAll();
        } catch (error) {
            throw error;
        }
    }
}

export default BookService;