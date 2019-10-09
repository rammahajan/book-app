import MoodService from '../services/MoodService';
import Util from '../utils/Utils';

const util = new Util();

class MoodController {
    static async getAllMoods(req, res) {
        try {
            const allMoods = await MoodService.getAllMoods();
            console.log("get all moods", allMoods);
            if (allMoods.length > 0) {
                util.setSuccess(200, 'Moods retrieved', allMoods);
            } else {
                util.setSuccess(200, 'No Moods found');
            }
            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
}

export default MoodController;