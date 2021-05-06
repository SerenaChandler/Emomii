const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

router.post('/', (req, res) => {
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	}).then(response => {
		req.session.save(() => {
			req.session.user_id = response.id;
			req.session.name = response.name;
			req.session.logged_in = true;
			res.json(response);
		});
	});
});

router.post('/login', (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(response => {
		if (!response) {
			res.status(400).json({ message: `${req.body.email} not found` });
			return;
		}
		const validPassword = response.checkPassword(req.body.password);
		if (!validPassword) {
			res.status(400).json({ message: 'Invalid password' });
			return;
		}
		req.session.save(() => {
			req.session.user_id = response.id;
			req.session.name = response.name;
			req.session.logged_in = true;
			res.json({ user: response, message: 'logged in' });
		});
	});
});

router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).render('homepage').end();
		});
	}
	else {
		res.status(404).render('homepage').end();
	}
});

module.exports = router;