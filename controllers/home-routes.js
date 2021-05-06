const router = require('express').Router();

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

module.exports = router;
