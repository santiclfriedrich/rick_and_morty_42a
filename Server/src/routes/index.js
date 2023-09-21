const {Router} = require('express');
const router = Router();

const getCharById = require('../controllers/getChardById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');



router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav)
router.get('/character/:id', getCharById)


module.exports = router;
