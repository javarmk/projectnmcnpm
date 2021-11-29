const router = require('express').Router()
const {verifyAdmin,loginAdmin} = require('../controllers/admins')
const verifyToken = require('../middlewares/authentication')






// @route POST api/admins/login
// @desc Login admin
// @access Public
router.post('/login',async(req, res) => {await loginAdmin(req, res)})

module.exports = router