import {
    Router
} from 'express';
import MoodController from '../controllers/MoodController';

const router = Router();

router.get('/', MoodController.getAllMoods);

export default router;