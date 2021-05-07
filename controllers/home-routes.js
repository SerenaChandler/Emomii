const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    if (req.session.loggedIn) {
		res.redirect('/dashboard');
		return;
	}
	res.render('homepage');
});

router.use((req, res) => {
	res.status(404).end();
});

router.get('/post/:id', async (req, res) => {
	try {
	  const postData = await Post.findByPk(req.params.id, {
		include: [
		  {
			model: User ,
			attributes: ['name'],
		  },
		],
	  });
  
	  const post = postData.get({ plain: true });
  
	  res.render('post', {
		...post,
		logged_in: req.session.logged_in
	  });
	} catch (err) {
	  res.status(500).json(err);
	}
  });
  

//   router.get('/', async (req, res) => {
// 	try{
// 	const postData = await Post.findAll({
// 		where: {
// 			user_id: req.session.user_id
// 		},
// 		attributes: [
// 		'date',
// 		'parentMood',
//         'childMood',
// 		'grandChildMood',
// 		'entry'
// 		],
// 		include: [{
// 			model: User,
// 			attributes: ['name']
// 		}]
// 	}) 
// 	const posts = postData.map((post) => post.get({ plain: true }));
  
// 	// Pass serialized data and session flag into template
// 	res.render('userpost', { 
// 	  posts, 
// 	  logged_in: req.session.logged_in 
// 	});
//   } catch (err) {
// 	res.status(500).json(err);
//   }
// });


router.get('/', async (req, res) => {
	try {
	  // Get all projects and JOIN with user data
	  const userData = await User.findAll({

	  });
  
	  // Serialize data so the template can read it
	  const users = userData.map((user) => user.get({ plain: true }));
  
	  // Pass serialized data and session flag into template
	  res.render('homepage', { 
		users, 
		logged_in: req.session.logged_in 
	  });
	} catch (err) {
	  res.status(500).json(err);
	}
  });

module.exports = router;