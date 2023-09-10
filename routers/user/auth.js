const express = require ('express')
const router = express.Router()
const adminController = require('../../controllers/user/auth')
const verifySignup = require ('../../middlewares/verifySignup');

router.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
    });

router.post('/signup',[verifySignup.checkRoleExist],adminController.signup)
router.post('/signin',[verifySignup.checkRoleExist],adminController.signin)


router.delete('/:id', adminController.deleteUser)

// router.get('/', superAdmincontroller.getAdmins)
// router.get('/:id', superAdmincontroller.getById)
// router.post('/', superAdmincontroller.createById)
// router.patch('/:id', superAdmincontroller.updateById)
// router.delete('/:id', superAdmincontroller.deleteById)


module.exports = router
