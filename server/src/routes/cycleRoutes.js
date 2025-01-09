const express = require('express');
const router = express.Router();
const cycleController = require('../controllers/cycleController');
const authMiddleware = require('../middleware/authMiddleware'); // Import authentication middleware

router.use(authMiddleware);

router.post('/', cycleController.createCycle);
router.get('/', cycleController.getCycles);
router.get('/:cycleId', cycleController.getCycle); 
router.put('/:cycleId', cycleController.updateCycle); 
router.delete('/:cycleId', cycleController.deleteCycle);

module.exports = router;