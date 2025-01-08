const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routineController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/', routineController.createRoutine);
router.get('/', routineController.getRoutines);
router.get('/:routineId', routineController.getRoutine);
router.put('/:routineId', routineController.updateRoutine);
router.delete('/:routineId', routineController.deleteRoutine);

module.exports = router;