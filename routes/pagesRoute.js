const router = require('express').Router();
const pagesController = require('../controllers/pagesController');
router.get('/', pagesController.getHome);
router.get('/login', pagesController.getLogin);
router.get('/signup', pagesController.getRegister);
router.post('/login', pagesController.login);
router.get('/dashboard', pagesController.getDashboard);
module.exports = router;