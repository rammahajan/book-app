import {
    Router
} from 'express';
import BookController from '../controllers/BookController';

const router = Router();

router.get('/', BookController.getAllBooks);

export default router;