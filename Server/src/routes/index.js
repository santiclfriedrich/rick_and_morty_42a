const {Router} = require('express');
const getCharById = require('../controllers/getChardById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const login = require('../controllers/loginController');

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav)

module.exports = router;
