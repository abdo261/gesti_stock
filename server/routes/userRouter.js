const express = require('express');
const router = express.Router();
const { registerUser, loginUser,updateUser,changePassword,deleteUser } = require('../controllers/userController');
const isAuth = require('../middlewares/isAuthenticated')
/**
 * @method POST
 * @route /api/register
 * @access Public
 * @description Register a new user
 * @param {string} first_name - The first name of the user
 * @param {string} last_name - The last name of the user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @param {boolean} [is_admin=false] - Indicates if the user is an admin (optional)
 * @param {string} [image=null] - The image URL of the user (optional)
 */
router.post('/register', registerUser);

/**
 * @method POST
 * @route /api/login
 * @access Public
 * @description Login user
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @returns {object} - JSON object containing token and user information
 */
router.post('/login', loginUser);


/**
 * @method PUT
 * @route /api/users/:id
 * @access Private
 * @description Update user information (except password)
 * @param {string} id - The ID of the user to update
 * @param {string} [first_name] - The updated first name of the user (optional)
 * @param {string} [last_name] - The updated last name of the user (optional)
 * @param {string} [email] - The updated email of the user (optional)
 * @param {boolean} [is_admin] - The updated admin status of the user (optional)
 * @param {string} [image] - The updated image URL of the user (optional)
 */
router.put('/update/:id', updateUser);

/**
 * @method PUT
 * @route /api/change-password
 * @access Private
 * @description Change user's password
 * @param {string} old_password - The old password of the user
 * @param {string} new_password - The new password of the user
 */
router.put('/change/password', isAuth, changePassword);
/**
 * @method DELETE
 * @route /api/users
 * @access Private
 * @description Delete user account
 */
router.delete('/destroy', isAuth, deleteUser);
// /**
//  * @method POST
//  * @route /api/forget-password
//  * @access Public
//  * @description Forget user's password
//  * @param {string} email - The email of the user
//  */
// router.post('/forget/password', forgetPassword);

module.exports = router;
