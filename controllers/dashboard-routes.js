const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');



// router.get('/', withAuth, (req, res) => {
//     if (req.session.loggedIn) {
// 		res.redirect('dashboard');
// 		return;
// 	}
// 	res.render('dashboard');
// });





router.get('/', withAuth, (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.user_id
		},
		attributes: [
		
		'parentMood',
		'childMood',
		'grandChildMood',
		'entry',
      
		],
		include: [{
			model: User,
			attributes: ['name']
		}]
	}).then(response => {
		const posts = response.map(post => post.get({ plain: true })); 
		console.log("string")
		console.log(response)
		res.render('dashboard', { posts, loggedIn: true });
	}).catch(err => {
		res.status(500).json(err);
	});
});

module.exports = router;