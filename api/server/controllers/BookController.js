import BookService from '../services/BookService';
import Util from '../utils/Utils';

const util = new Util();

class BookController {
    static async getAllBooks(req, res) {
        try {
            const allBooks = BookService.getAllBooks();
            if (allBooks.length > 0) {
                util.setSuccess(200, 'Books retrieved', allBooks);
            } else {
                util.setSuccess(200, 'No books found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}

export default BookController;