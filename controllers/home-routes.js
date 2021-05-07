const router = require('express').Router();
const { User } = require('../models');

// router.get('/', (req, res) => {
//     if (req.session.loggedIn) {
// 		res.redirect('/dashboard');
// 		return;
// 	}
// 	res.render('homepage');
// });

// router.use((req, res) => {
// 	res.status(404).end();
// });

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