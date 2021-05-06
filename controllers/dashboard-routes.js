const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');

router.get('/', withAuth, (req, res) => {
	User.findOne({
		where: {
			user_id: req.session.user_id
		},
		attributes: ['name'],
	}).then(res => {
		res.render('dashboard', { loggedIn: true });
	}).catch(err => {
		res.status(500).json(err);
	});
});

module.exports = router;
