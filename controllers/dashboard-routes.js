const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models');


router.get('/', withAuth, (req, res) => {
    if (req.session.loggedIn) {
		res.redirect('dashboard');
		return;
	}
	res.render('dashboard');
});





router.get('/', withAuth, async (req, res) => {
	try{
	const postData = await Post.findAll({
		where: {
			user_id: req.session.user_id
		},
		attributes: [
		'date',
		'parentMood',
        'childMood',
		'grandChildMood',
		'entry'
		],
		include: [{
			model: User,
			attributes: ['name']
		}]
	}) 
	const posts = postData.map((post) => post.get({ plain: true }));
  
	// Pass serialized data and session flag into template
	res.render('userpost', { 
	  posts, 
	  logged_in: req.session.logged_in 
	});
  } catch (err) {
	res.status(500).json(err);
  }
});

module.exports = router;