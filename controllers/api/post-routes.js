const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
// 	try {
// 	  const newPost = await Post.create({
// 		...req.body,
// 		user_id: req.session.user_id,
// 	  });
  
// 	  res.status(200).json(newPost);
// 	} catch (err) {
// 	  res.status(400).json(err);
// 	}
//   });

//   router.delete('/:id', withAuth, async (req, res) => {
// 	try {
// 	  const postData = await Post.destroy({
// 		where: {
// 		  id: req.params.id,
// 		  user_id: req.session.user_id,
// 		},
// 	  });
  
// 	  if (!postData) {
// 		res.status(404).json({ message: 'No post found with this id!' });
// 		return;
// 	  }
  
// 	  res.status(200).json(postData);
// 	} catch (err) {
// 	  res.status(500).json(err);
// 	}
//   });
  


// The `/api/categories` endpoint

router.get('/', async(req, res) => {
	// find all categories
	// be sure to include its associated Products
	try {
	  const postData = await Post.findAll({...req.body, user_id:req.session.user_id});
	  res.status(200).json(postData);
	} catch (err) {
	  res.status(500).json(err);
	}
  
  });
  
  router.get('/:id', async(req, res) => {
	try {
	  const postData = await Post.findOne({
		where: {
			id: req.params.id
		},
		include: {
			model: Post,
			attributes: ['id', 'date', 'entry', 'parentMood', 'childMood', 'grandChildMood', 'user_id']
		}
	});
  
	  if (!postData) {
		res.status(404).json({ message: 'no post found with this id' });
		return;
	  }
  
	  res.status(200).json(postData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });
  
  router.post('/', async(req, res) => {
	// create a new category
	try {
	  const postData = await Post.create({
		id: req.body.id
	});
	  res.status(200).json(postData);
	} catch (err) {
	  res.status(400).json(err);
	}
  });
  
  router.put('/:id', async(req, res) => {
	// update a category by its `id` value
	try {
	  const postData = await Post.update(req.body, {
		where: {
			id: req.params.id
		}
	});
	  res.status(200).json(postData);
	} catch (err) {
	  res.status(400).json(err);
	}
  
  });
  
  router.delete('/:id', async(req, res) => {
	// delete a category by its `id` value
  
	try {
	  const postData = await Post.destroy({
		where: {
		  id: req.params.id
		}
	  });
  
	  if (!postData) {
		res.status(404).json({ message: 'No post found with this id!' });
		return;
	  }
  
	  res.status(200).json(postData);
	} catch (err) {
	  res.status(500).json(err);
	}
  });
  
  module.exports = router;


