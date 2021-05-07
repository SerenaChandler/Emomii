const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');



router.get('/', withAuth, (req, res) => {
    if (req.session.loggedIn) {
		res.redirect('dashboard');
		return;
	}else {
	res.render('homepage');}
});





router.get('/', withAuth, (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.user_id
		},
		attributes: [
		'id',
		'title',
		'content',
        'mood',
		'created_at'
		],
		include: [{
			model: User,
			attributes: ['name']
		}]
	}).then(response => {
		const posts = response.map(post => post.get({ plain: true }));
		res.render('dashboard', { posts, loggedIn: true });
	}).catch(err => {
		res.status(500).json(err);
	});
});

module.exports = router;