const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
	Post.findAll({
		attributes: [
		'id',
		'title',
		'content',
        'mood',
		'created_at'
		],
		order: [
		['created_at', 'DESC']
		],
		include: [{
        model: User,
        attributes: ['name']
        }]
	}).then(response => res.json(response))
	.catch(err => {
		res.status(500).json(err);
	});
});

router.get('/:id', withAuth, (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id
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
		if (!response) {
			res.status(404).json({ message: `Post ${req.params.id} not found` });
			return;
		}
		res.json(response);
	}).catch(err => {
		res.status(500).json(err);
	});
});

router.post('/', withAuth, (req, res) => {
	Post.create({
		title: req.body.title,
		content: req.body.content,
        mood: req.body.mood,
		user_id: req.session.user_id
	}).then(response => res.json(response))
	.catch(err => {
		res.status(500).json(err);
	});
});

router.put('/:id', withAuth, (req, res) => {
	Post.update({
		title: req.body.title,
		content: req.body.content
	}, {
		where: {
			id: req.params.id
		}
	}).then(response => {
		if (!response) {
			res.status(404).json({ message: `Post ${req.params.id} not found` });
			return;
		}
		res.json(response);
	}).catch(err => {
		res.status(500).json(err);
	});
});

router.delete('/:id', withAuth, (req, res) => {
	Post.destroy({
		where: {
			id: req.params.id
		}
	}).then(response => {
		if (!response) {
			res.status(404).json({ message: `Post ${req.params.id} not found` });
			return;
		}
		res.json(response);
	}).catch(err => {
		res.status(500).json(err);
	});
});

module.exports = router;
