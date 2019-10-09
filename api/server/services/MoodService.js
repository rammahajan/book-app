import database from '../database/models';

class MoodService {
    static async getAllMoods() {
        try {
            return await database.Mood.findAll();
        } catch (error) {
            throw error;
        }
    }
}

export default MoodService;